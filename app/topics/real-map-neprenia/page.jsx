import RealMapNepreniaKeywordPage, { generateMetadata } from './real-map-neprenia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapNepreniaKeywordPage />;
}
