import FreshStartVenoreotPrivateServerKeywordPage, { generateMetadata } from './fresh-start-venoreot-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartVenoreotPrivateServerKeywordPage />;
}
