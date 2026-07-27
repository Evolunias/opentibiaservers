import ActiveVenoreotServerKeywordPage, { generateMetadata } from './active-venoreot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveVenoreotServerKeywordPage />;
}
