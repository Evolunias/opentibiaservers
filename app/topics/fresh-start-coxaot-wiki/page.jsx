import FreshStartCoxaotWikiKeywordPage, { generateMetadata } from './fresh-start-coxaot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartCoxaotWikiKeywordPage />;
}
