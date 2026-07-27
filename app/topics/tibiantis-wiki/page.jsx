import TibiantisWikiKeywordPage, { generateMetadata } from './tibiantis-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiantisWikiKeywordPage />;
}
