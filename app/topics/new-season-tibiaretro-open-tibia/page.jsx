import NewSeasonTibiaretroOpenTibiaKeywordPage, { generateMetadata } from './new-season-tibiaretro-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonTibiaretroOpenTibiaKeywordPage />;
}
