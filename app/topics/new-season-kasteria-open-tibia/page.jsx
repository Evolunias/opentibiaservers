import NewSeasonKasteriaOpenTibiaKeywordPage, { generateMetadata } from './new-season-kasteria-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonKasteriaOpenTibiaKeywordPage />;
}
