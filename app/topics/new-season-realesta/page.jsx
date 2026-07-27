import NewSeasonRealestaKeywordPage, { generateMetadata } from './new-season-realesta';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonRealestaKeywordPage />;
}
