import NewSeasonRealeraServerKeywordPage, { generateMetadata } from './new-season-realera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonRealeraServerKeywordPage />;
}
