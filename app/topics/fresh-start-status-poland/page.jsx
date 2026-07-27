import FreshStartStatusPolandKeywordPage, { generateMetadata } from './fresh-start-status-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartStatusPolandKeywordPage />;
}
