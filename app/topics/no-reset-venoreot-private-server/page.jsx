import NoResetVenoreotPrivateServerKeywordPage, { generateMetadata } from './no-reset-venoreot-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetVenoreotPrivateServerKeywordPage />;
}
