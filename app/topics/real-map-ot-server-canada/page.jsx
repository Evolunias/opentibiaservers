import RealMapOtServerCanadaKeywordPage, { generateMetadata } from './real-map-ot-server-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapOtServerCanadaKeywordPage />;
}
