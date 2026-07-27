import FreshStartServerListMexicoKeywordPage, { generateMetadata } from './fresh-start-server-list-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartServerListMexicoKeywordPage />;
}
