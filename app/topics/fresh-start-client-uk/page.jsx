import FreshStartClientUkKeywordPage, { generateMetadata } from './fresh-start-client-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartClientUkKeywordPage />;
}
