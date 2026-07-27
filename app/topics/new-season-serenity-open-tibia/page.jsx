import NewSeasonSerenityOpenTibiaKeywordPage, { generateMetadata } from './new-season-serenity-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonSerenityOpenTibiaKeywordPage />;
}
