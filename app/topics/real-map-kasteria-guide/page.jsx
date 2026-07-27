import RealMapKasteriaGuideKeywordPage, { generateMetadata } from './real-map-kasteria-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapKasteriaGuideKeywordPage />;
}
