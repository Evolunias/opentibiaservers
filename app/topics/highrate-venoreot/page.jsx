import HighrateVenoreotKeywordPage, { generateMetadata } from './highrate-venoreot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateVenoreotKeywordPage />;
}
