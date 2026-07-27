import FreshStartServerListUkKeywordPage, { generateMetadata } from './fresh-start-server-list-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartServerListUkKeywordPage />;
}
