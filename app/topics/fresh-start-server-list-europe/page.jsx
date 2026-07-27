import FreshStartServerListEuropeKeywordPage, { generateMetadata } from './fresh-start-server-list-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartServerListEuropeKeywordPage />;
}
