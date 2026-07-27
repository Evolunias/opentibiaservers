import NewVenoreotClientKeywordPage, { generateMetadata } from './new-venoreot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewVenoreotClientKeywordPage />;
}
