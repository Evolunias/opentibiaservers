import CurrentShadowcoresWikiKeywordPage, { generateMetadata } from './current-shadowcores-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentShadowcoresWikiKeywordPage />;
}
