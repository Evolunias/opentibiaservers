import FreshStartStatusBrazilKeywordPage, { generateMetadata } from './fresh-start-status-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartStatusBrazilKeywordPage />;
}
