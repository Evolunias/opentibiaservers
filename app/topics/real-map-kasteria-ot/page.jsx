import RealMapKasteriaOtKeywordPage, { generateMetadata } from './real-map-kasteria-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapKasteriaOtKeywordPage />;
}
