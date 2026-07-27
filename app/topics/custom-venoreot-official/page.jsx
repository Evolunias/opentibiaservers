import CustomVenoreotOfficialKeywordPage, { generateMetadata } from './custom-venoreot-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomVenoreotOfficialKeywordPage />;
}
