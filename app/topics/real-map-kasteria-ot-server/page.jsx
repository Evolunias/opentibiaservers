import RealMapKasteriaOtServerKeywordPage, { generateMetadata } from './real-map-kasteria-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapKasteriaOtServerKeywordPage />;
}
