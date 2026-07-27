import RealMapKasteriaOtsKeywordPage, { generateMetadata } from './real-map-kasteria-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapKasteriaOtsKeywordPage />;
}
