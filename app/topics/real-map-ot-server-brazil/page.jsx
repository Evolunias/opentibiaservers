import RealMapOtServerBrazilKeywordPage, { generateMetadata } from './real-map-ot-server-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapOtServerBrazilKeywordPage />;
}
