import NewVenoreotPrivateServerKeywordPage, { generateMetadata } from './new-venoreot-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewVenoreotPrivateServerKeywordPage />;
}
