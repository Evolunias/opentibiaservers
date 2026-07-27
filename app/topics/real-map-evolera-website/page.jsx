import RealMapEvoleraWebsiteKeywordPage, { generateMetadata } from './real-map-evolera-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapEvoleraWebsiteKeywordPage />;
}
