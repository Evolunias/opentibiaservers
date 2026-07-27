import NewSeasonNilotGuideKeywordPage, { generateMetadata } from './new-season-nilot-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonNilotGuideKeywordPage />;
}
