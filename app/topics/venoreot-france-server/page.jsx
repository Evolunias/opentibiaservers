import VenoreotFranceServerKeywordPage, { generateMetadata } from './venoreot-france-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <VenoreotFranceServerKeywordPage />;
}
