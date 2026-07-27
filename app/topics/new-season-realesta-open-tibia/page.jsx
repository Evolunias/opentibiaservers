import NewSeasonRealestaOpenTibiaKeywordPage, { generateMetadata } from './new-season-realesta-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonRealestaOpenTibiaKeywordPage />;
}
