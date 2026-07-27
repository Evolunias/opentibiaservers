import VenoreotSwedenServersKeywordPage, { generateMetadata } from './venoreot-sweden-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <VenoreotSwedenServersKeywordPage />;
}
