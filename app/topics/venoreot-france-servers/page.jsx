import VenoreotFranceServersKeywordPage, { generateMetadata } from './venoreot-france-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <VenoreotFranceServersKeywordPage />;
}
