import OfficialVenoreotClientKeywordPage, { generateMetadata } from './official-venoreot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialVenoreotClientKeywordPage />;
}
