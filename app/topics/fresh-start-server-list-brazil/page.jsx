import FreshStartServerListBrazilKeywordPage, { generateMetadata } from './fresh-start-server-list-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartServerListBrazilKeywordPage />;
}
