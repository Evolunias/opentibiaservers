import RealMapSabrehavenKeywordPage, { generateMetadata } from './real-map-sabrehaven';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapSabrehavenKeywordPage />;
}
