import FreshStartStatusEuropeKeywordPage, { generateMetadata } from './fresh-start-status-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartStatusEuropeKeywordPage />;
}
