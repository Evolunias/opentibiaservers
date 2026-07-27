import RubinotRealMapServersFranceKeywordPage, { generateMetadata } from './rubinot-real-map-servers-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RubinotRealMapServersFranceKeywordPage />;
}
