import TopVenoreotOfficialKeywordPage, { generateMetadata } from './top-venoreot-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopVenoreotOfficialKeywordPage />;
}
