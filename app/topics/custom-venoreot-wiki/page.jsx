import CustomVenoreotWikiKeywordPage, { generateMetadata } from './custom-venoreot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomVenoreotWikiKeywordPage />;
}
