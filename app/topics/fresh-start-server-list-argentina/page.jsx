import FreshStartServerListArgentinaKeywordPage, { generateMetadata } from './fresh-start-server-list-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartServerListArgentinaKeywordPage />;
}
