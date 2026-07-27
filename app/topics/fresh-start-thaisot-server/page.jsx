import FreshStartThaisotServerKeywordPage, { generateMetadata } from './fresh-start-thaisot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartThaisotServerKeywordPage />;
}
