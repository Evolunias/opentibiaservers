import LowrateVenoreotKeywordPage, { generateMetadata } from './lowrate-venoreot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateVenoreotKeywordPage />;
}
