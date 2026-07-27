import NewSeasonSerenityTibiaKeywordPage, { generateMetadata } from './new-season-serenity-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonSerenityTibiaKeywordPage />;
}
