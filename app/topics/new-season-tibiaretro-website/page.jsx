import NewSeasonTibiaretroWebsiteKeywordPage, { generateMetadata } from './new-season-tibiaretro-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonTibiaretroWebsiteKeywordPage />;
}
