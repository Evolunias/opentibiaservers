import NewVenoreotKeywordPage, { generateMetadata } from './new-venoreot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewVenoreotKeywordPage />;
}
