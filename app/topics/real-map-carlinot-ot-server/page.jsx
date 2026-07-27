import RealMapCarlinotOtServerKeywordPage, { generateMetadata } from './real-map-carlinot-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapCarlinotOtServerKeywordPage />;
}
