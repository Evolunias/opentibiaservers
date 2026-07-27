import RealMapMediviaServerKeywordPage, { generateMetadata } from './real-map-medivia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapMediviaServerKeywordPage />;
}
