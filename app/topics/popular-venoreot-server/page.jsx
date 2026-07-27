import PopularVenoreotServerKeywordPage, { generateMetadata } from './popular-venoreot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularVenoreotServerKeywordPage />;
}
