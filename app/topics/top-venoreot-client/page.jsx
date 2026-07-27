import TopVenoreotClientKeywordPage, { generateMetadata } from './top-venoreot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopVenoreotClientKeywordPage />;
}
