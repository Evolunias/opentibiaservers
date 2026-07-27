import BestUnlineWikiKeywordPage, { generateMetadata } from './best-unline-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestUnlineWikiKeywordPage />;
}
