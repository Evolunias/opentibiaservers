import CurrentShadowcoresServerKeywordPage, { generateMetadata } from './current-shadowcores-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentShadowcoresServerKeywordPage />;
}
