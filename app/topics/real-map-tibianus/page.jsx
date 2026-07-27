import RealMapTibianusKeywordPage, { generateMetadata } from './real-map-tibianus';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapTibianusKeywordPage />;
}
