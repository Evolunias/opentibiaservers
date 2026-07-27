import NepreniaRealMapServersFranceKeywordPage, { generateMetadata } from './neprenia-real-map-servers-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NepreniaRealMapServersFranceKeywordPage />;
}
