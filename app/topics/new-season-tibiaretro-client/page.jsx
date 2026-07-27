import NewSeasonTibiaretroClientKeywordPage, { generateMetadata } from './new-season-tibiaretro-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonTibiaretroClientKeywordPage />;
}
