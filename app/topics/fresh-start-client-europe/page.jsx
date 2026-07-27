import FreshStartClientEuropeKeywordPage, { generateMetadata } from './fresh-start-client-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartClientEuropeKeywordPage />;
}
