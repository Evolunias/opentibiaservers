import FreshStartStatusSwedenKeywordPage, { generateMetadata } from './fresh-start-status-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartStatusSwedenKeywordPage />;
}
