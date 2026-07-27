import TopVenoreotKeywordPage, { generateMetadata } from './top-venoreot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopVenoreotKeywordPage />;
}
