import FreshStartThaisotClientKeywordPage, { generateMetadata } from './fresh-start-thaisot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartThaisotClientKeywordPage />;
}
