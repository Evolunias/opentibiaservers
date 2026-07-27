import RealMapNepreniaLoginKeywordPage, { generateMetadata } from './real-map-neprenia-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapNepreniaLoginKeywordPage />;
}
