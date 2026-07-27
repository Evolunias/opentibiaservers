import CustomVenoreotClientKeywordPage, { generateMetadata } from './custom-venoreot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomVenoreotClientKeywordPage />;
}
