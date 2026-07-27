import CurrentShadowcoresKeywordPage, { generateMetadata } from './current-shadowcores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentShadowcoresKeywordPage />;
}
