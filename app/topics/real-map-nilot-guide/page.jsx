import RealMapNilotGuideKeywordPage, { generateMetadata } from './real-map-nilot-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapNilotGuideKeywordPage />;
}
