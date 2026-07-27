import NewSeasonRealestaOtsKeywordPage, { generateMetadata } from './new-season-realesta-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonRealestaOtsKeywordPage />;
}
