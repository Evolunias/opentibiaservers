import RealMapOtServerUsaKeywordPage, { generateMetadata } from './real-map-ot-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapOtServerUsaKeywordPage />;
}
