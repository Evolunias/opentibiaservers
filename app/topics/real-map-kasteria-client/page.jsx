import RealMapKasteriaClientKeywordPage, { generateMetadata } from './real-map-kasteria-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapKasteriaClientKeywordPage />;
}
