import HighrateVenoreotClientKeywordPage, { generateMetadata } from './highrate-venoreot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateVenoreotClientKeywordPage />;
}
