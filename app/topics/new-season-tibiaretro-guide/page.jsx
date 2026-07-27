import NewSeasonTibiaretroGuideKeywordPage, { generateMetadata } from './new-season-tibiaretro-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonTibiaretroGuideKeywordPage />;
}
