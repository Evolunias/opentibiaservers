import CustomVenoreotGuideKeywordPage, { generateMetadata } from './custom-venoreot-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomVenoreotGuideKeywordPage />;
}
