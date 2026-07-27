import HighrateArcaniarlGuideKeywordPage, { generateMetadata } from './highrate-arcaniarl-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateArcaniarlGuideKeywordPage />;
}
