import FreshStartStatusGermanyKeywordPage, { generateMetadata } from './fresh-start-status-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartStatusGermanyKeywordPage />;
}
