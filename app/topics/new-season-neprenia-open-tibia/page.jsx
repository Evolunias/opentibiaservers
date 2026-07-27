import NewSeasonNepreniaOpenTibiaKeywordPage, { generateMetadata } from './new-season-neprenia-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonNepreniaOpenTibiaKeywordPage />;
}
