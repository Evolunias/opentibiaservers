import NewSeasonTibiaretroPrivateServerKeywordPage, { generateMetadata } from './new-season-tibiaretro-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonTibiaretroPrivateServerKeywordPage />;
}
