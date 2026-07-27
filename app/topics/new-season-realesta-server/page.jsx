import NewSeasonRealestaServerKeywordPage, { generateMetadata } from './new-season-realesta-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonRealestaServerKeywordPage />;
}
