import RealMapNoxiousotServerKeywordPage, { generateMetadata } from './real-map-noxiousot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapNoxiousotServerKeywordPage />;
}
