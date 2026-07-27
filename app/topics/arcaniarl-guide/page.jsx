import ArcaniarlGuideKeywordPage, { generateMetadata } from './arcaniarl-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArcaniarlGuideKeywordPage />;
}
