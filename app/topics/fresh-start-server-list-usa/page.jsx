import FreshStartServerListUsaKeywordPage, { generateMetadata } from './fresh-start-server-list-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartServerListUsaKeywordPage />;
}
