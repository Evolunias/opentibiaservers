import ThorniaRealMapServersFranceKeywordPage, { generateMetadata } from './thornia-real-map-servers-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThorniaRealMapServersFranceKeywordPage />;
}
