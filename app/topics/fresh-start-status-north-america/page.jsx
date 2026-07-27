import FreshStartStatusNorthAmericaKeywordPage, { generateMetadata } from './fresh-start-status-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartStatusNorthAmericaKeywordPage />;
}
