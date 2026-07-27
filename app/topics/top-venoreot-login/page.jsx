import TopVenoreotLoginKeywordPage, { generateMetadata } from './top-venoreot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopVenoreotLoginKeywordPage />;
}
