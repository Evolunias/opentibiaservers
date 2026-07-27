import BestClassickDrakoriaWikiKeywordPage, { generateMetadata } from './best-classick-drakoria-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestClassickDrakoriaWikiKeywordPage />;
}
