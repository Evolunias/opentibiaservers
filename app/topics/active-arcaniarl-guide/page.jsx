import ActiveArcaniarlGuideKeywordPage, { generateMetadata } from './active-arcaniarl-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveArcaniarlGuideKeywordPage />;
}
