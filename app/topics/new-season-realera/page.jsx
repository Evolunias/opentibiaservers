import NewSeasonRealeraKeywordPage, { generateMetadata } from './new-season-realera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonRealeraKeywordPage />;
}
