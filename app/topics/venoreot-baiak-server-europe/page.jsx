import VenoreotBaiakServerEuropeKeywordPage, { generateMetadata } from './venoreot-baiak-server-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <VenoreotBaiakServerEuropeKeywordPage />;
}
