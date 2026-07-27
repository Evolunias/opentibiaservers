import FreshStartServerListSwedenKeywordPage, { generateMetadata } from './fresh-start-server-list-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartServerListSwedenKeywordPage />;
}
