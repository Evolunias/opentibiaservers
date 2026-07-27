import TopCoxaotWikiKeywordPage, { generateMetadata } from './top-coxaot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopCoxaotWikiKeywordPage />;
}
