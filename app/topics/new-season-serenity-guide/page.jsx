import NewSeasonSerenityGuideKeywordPage, { generateMetadata } from './new-season-serenity-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonSerenityGuideKeywordPage />;
}
