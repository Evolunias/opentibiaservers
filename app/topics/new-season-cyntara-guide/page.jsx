import NewSeasonCyntaraGuideKeywordPage, { generateMetadata } from './new-season-cyntara-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonCyntaraGuideKeywordPage />;
}
