import FreshStartStatusCanadaKeywordPage, { generateMetadata } from './fresh-start-status-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartStatusCanadaKeywordPage />;
}
