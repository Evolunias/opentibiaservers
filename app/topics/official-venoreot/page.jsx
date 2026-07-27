import OfficialVenoreotKeywordPage, { generateMetadata } from './official-venoreot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialVenoreotKeywordPage />;
}
