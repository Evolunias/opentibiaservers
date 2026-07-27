import CustomVenoreotKeywordPage, { generateMetadata } from './custom-venoreot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomVenoreotKeywordPage />;
}
