import NewSeasonRealeraOtKeywordPage, { generateMetadata } from './new-season-realera-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonRealeraOtKeywordPage />;
}
