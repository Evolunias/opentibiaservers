import MiracleRealMapServersFranceKeywordPage, { generateMetadata } from './miracle-real-map-servers-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MiracleRealMapServersFranceKeywordPage />;
}
