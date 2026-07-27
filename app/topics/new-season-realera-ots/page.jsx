import NewSeasonRealeraOtsKeywordPage, { generateMetadata } from './new-season-realera-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonRealeraOtsKeywordPage />;
}
