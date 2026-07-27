import AlasteraRealMapServersFranceKeywordPage, { generateMetadata } from './alastera-real-map-servers-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AlasteraRealMapServersFranceKeywordPage />;
}
