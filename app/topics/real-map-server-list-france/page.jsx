import RealMapServerListFranceKeywordPage, { generateMetadata } from './real-map-server-list-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapServerListFranceKeywordPage />;
}
