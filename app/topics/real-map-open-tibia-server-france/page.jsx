import RealMapOpenTibiaServerFranceKeywordPage, { generateMetadata } from './real-map-open-tibia-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapOpenTibiaServerFranceKeywordPage />;
}
