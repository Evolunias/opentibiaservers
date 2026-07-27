import NewSeasonRealeraGuideKeywordPage, { generateMetadata } from './new-season-realera-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonRealeraGuideKeywordPage />;
}
