import PopularVenoreotKeywordPage, { generateMetadata } from './popular-venoreot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularVenoreotKeywordPage />;
}
