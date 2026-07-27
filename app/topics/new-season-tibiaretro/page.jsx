import NewSeasonTibiaretroKeywordPage, { generateMetadata } from './new-season-tibiaretro';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonTibiaretroKeywordPage />;
}
