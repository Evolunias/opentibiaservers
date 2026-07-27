import NostaltherRealMapServersFranceKeywordPage, { generateMetadata } from './nostalther-real-map-servers-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NostaltherRealMapServersFranceKeywordPage />;
}
