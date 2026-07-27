import NewSeasonTibiaretroTibiaKeywordPage, { generateMetadata } from './new-season-tibiaretro-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonTibiaretroTibiaKeywordPage />;
}
