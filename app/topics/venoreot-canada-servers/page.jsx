import VenoreotCanadaServersKeywordPage, { generateMetadata } from './venoreot-canada-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <VenoreotCanadaServersKeywordPage />;
}
