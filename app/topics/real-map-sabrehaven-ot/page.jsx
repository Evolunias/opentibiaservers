import RealMapSabrehavenOtKeywordPage, { generateMetadata } from './real-map-sabrehaven-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapSabrehavenOtKeywordPage />;
}
