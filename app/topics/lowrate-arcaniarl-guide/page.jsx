import LowrateArcaniarlGuideKeywordPage, { generateMetadata } from './lowrate-arcaniarl-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateArcaniarlGuideKeywordPage />;
}
