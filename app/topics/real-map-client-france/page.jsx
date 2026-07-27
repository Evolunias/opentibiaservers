import RealMapClientFranceKeywordPage, { generateMetadata } from './real-map-client-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapClientFranceKeywordPage />;
}
