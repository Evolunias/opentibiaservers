import NewSeasonRealestaLoginKeywordPage, { generateMetadata } from './new-season-realesta-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonRealestaLoginKeywordPage />;
}
