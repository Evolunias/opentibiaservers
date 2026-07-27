import NewSeasonRealestaOtServerKeywordPage, { generateMetadata } from './new-season-realesta-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonRealestaOtServerKeywordPage />;
}
