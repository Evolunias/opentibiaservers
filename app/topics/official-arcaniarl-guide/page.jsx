import OfficialArcaniarlGuideKeywordPage, { generateMetadata } from './official-arcaniarl-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialArcaniarlGuideKeywordPage />;
}
