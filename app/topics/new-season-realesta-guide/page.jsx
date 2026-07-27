import NewSeasonRealestaGuideKeywordPage, { generateMetadata } from './new-season-realesta-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonRealestaGuideKeywordPage />;
}
