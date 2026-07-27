import CustomVenoreotServerKeywordPage, { generateMetadata } from './custom-venoreot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomVenoreotServerKeywordPage />;
}
