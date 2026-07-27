import LowrateVenoreotPrivateServerKeywordPage, { generateMetadata } from './lowrate-venoreot-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateVenoreotPrivateServerKeywordPage />;
}
