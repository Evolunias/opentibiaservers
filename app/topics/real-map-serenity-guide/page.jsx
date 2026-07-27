import RealMapSerenityGuideKeywordPage, { generateMetadata } from './real-map-serenity-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapSerenityGuideKeywordPage />;
}
