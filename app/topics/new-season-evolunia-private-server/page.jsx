import NewSeasonEvoluniaPrivateServerKeywordPage, { generateMetadata } from './new-season-evolunia-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonEvoluniaPrivateServerKeywordPage />;
}
