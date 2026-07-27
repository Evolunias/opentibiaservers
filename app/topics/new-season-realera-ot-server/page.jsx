import NewSeasonRealeraOtServerKeywordPage, { generateMetadata } from './new-season-realera-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonRealeraOtServerKeywordPage />;
}
