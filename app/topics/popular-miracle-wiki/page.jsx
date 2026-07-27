import PopularMiracleWikiKeywordPage, { generateMetadata } from './popular-miracle-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularMiracleWikiKeywordPage />;
}
