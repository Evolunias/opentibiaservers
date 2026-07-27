import RealMapTibianusOtKeywordPage, { generateMetadata } from './real-map-tibianus-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapTibianusOtKeywordPage />;
}
