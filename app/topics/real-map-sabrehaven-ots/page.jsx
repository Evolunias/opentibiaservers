import RealMapSabrehavenOtsKeywordPage, { generateMetadata } from './real-map-sabrehaven-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapSabrehavenOtsKeywordPage />;
}
