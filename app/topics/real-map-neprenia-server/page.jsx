import RealMapNepreniaServerKeywordPage, { generateMetadata } from './real-map-neprenia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapNepreniaServerKeywordPage />;
}
