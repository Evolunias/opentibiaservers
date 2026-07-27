import TibianusRealMapServerFranceKeywordPage, { generateMetadata } from './tibianus-real-map-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibianusRealMapServerFranceKeywordPage />;
}
