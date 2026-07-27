import FreshStartStatusArgentinaKeywordPage, { generateMetadata } from './fresh-start-status-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartStatusArgentinaKeywordPage />;
}
