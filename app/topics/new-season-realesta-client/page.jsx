import NewSeasonRealestaClientKeywordPage, { generateMetadata } from './new-season-realesta-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonRealestaClientKeywordPage />;
}
