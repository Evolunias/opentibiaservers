import BestBlazeraWikiKeywordPage, { generateMetadata } from './best-blazera-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestBlazeraWikiKeywordPage />;
}
