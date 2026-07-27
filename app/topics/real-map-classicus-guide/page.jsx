import RealMapClassicusGuideKeywordPage, { generateMetadata } from './real-map-classicus-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapClassicusGuideKeywordPage />;
}
