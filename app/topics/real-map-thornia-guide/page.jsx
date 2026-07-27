import RealMapThorniaGuideKeywordPage, { generateMetadata } from './real-map-thornia-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapThorniaGuideKeywordPage />;
}
