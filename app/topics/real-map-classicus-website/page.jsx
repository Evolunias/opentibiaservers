import RealMapClassicusWebsiteKeywordPage, { generateMetadata } from './real-map-classicus-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapClassicusWebsiteKeywordPage />;
}
