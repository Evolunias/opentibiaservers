import PopularVenoreotLoginKeywordPage, { generateMetadata } from './popular-venoreot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularVenoreotLoginKeywordPage />;
}
