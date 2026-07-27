import MediviaCustomMapServersFranceKeywordPage, { generateMetadata } from './medivia-custom-map-servers-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MediviaCustomMapServersFranceKeywordPage />;
}
