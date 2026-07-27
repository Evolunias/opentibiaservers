import FreshStartServerNorthAmericaKeywordPage, { generateMetadata } from './fresh-start-server-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartServerNorthAmericaKeywordPage />;
}
