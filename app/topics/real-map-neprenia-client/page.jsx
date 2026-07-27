import RealMapNepreniaClientKeywordPage, { generateMetadata } from './real-map-neprenia-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapNepreniaClientKeywordPage />;
}
