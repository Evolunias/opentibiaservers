import CurrentShadowcoresLoginKeywordPage, { generateMetadata } from './current-shadowcores-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentShadowcoresLoginKeywordPage />;
}
