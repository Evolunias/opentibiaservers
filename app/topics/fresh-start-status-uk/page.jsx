import FreshStartStatusUkKeywordPage, { generateMetadata } from './fresh-start-status-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartStatusUkKeywordPage />;
}
