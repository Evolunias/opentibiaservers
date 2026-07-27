import PopularVenoreotOfficialKeywordPage, { generateMetadata } from './popular-venoreot-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularVenoreotOfficialKeywordPage />;
}
