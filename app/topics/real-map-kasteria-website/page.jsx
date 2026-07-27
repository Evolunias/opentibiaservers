import RealMapKasteriaWebsiteKeywordPage, { generateMetadata } from './real-map-kasteria-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapKasteriaWebsiteKeywordPage />;
}
