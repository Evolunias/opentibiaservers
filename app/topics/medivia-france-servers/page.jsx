import MediviaFranceServersKeywordPage, { generateMetadata } from './medivia-france-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MediviaFranceServersKeywordPage />;
}
