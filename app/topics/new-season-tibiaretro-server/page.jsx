import NewSeasonTibiaretroServerKeywordPage, { generateMetadata } from './new-season-tibiaretro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonTibiaretroServerKeywordPage />;
}
