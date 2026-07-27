import FreshStartStatusUsaKeywordPage, { generateMetadata } from './fresh-start-status-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartStatusUsaKeywordPage />;
}
