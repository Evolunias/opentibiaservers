import RealMapOtServerLatinAmericaKeywordPage, { generateMetadata } from './real-map-ot-server-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapOtServerLatinAmericaKeywordPage />;
}
