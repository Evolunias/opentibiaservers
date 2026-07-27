import FreshStartServerListNorthAmericaKeywordPage, { generateMetadata } from './fresh-start-server-list-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartServerListNorthAmericaKeywordPage />;
}
