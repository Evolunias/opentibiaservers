import TibianusRealMapServersFranceKeywordPage, { generateMetadata } from './tibianus-real-map-servers-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibianusRealMapServersFranceKeywordPage />;
}
