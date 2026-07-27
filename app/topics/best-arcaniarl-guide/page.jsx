import BestArcaniarlGuideKeywordPage, { generateMetadata } from './best-arcaniarl-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestArcaniarlGuideKeywordPage />;
}
