import RealMapArcaniarlGuideKeywordPage, { generateMetadata } from './real-map-arcaniarl-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapArcaniarlGuideKeywordPage />;
}
