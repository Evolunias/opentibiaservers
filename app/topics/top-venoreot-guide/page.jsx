import TopVenoreotGuideKeywordPage, { generateMetadata } from './top-venoreot-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopVenoreotGuideKeywordPage />;
}
