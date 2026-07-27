import NewVenoreotLoginKeywordPage, { generateMetadata } from './new-venoreot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewVenoreotLoginKeywordPage />;
}
