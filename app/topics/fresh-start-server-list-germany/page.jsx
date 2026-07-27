import FreshStartServerListGermanyKeywordPage, { generateMetadata } from './fresh-start-server-list-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartServerListGermanyKeywordPage />;
}
