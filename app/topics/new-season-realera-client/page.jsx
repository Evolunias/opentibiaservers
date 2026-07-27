import NewSeasonRealeraClientKeywordPage, { generateMetadata } from './new-season-realera-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonRealeraClientKeywordPage />;
}
