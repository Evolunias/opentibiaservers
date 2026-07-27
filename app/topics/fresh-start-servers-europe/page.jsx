import FreshStartServersEuropeKeywordPage, { generateMetadata } from './fresh-start-servers-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartServersEuropeKeywordPage />;
}
