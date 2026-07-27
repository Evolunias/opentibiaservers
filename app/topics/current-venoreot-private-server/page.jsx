import CurrentVenoreotPrivateServerKeywordPage, { generateMetadata } from './current-venoreot-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentVenoreotPrivateServerKeywordPage />;
}
