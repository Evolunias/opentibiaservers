import NewSeasonEvoluniaServerKeywordPage, { generateMetadata } from './new-season-evolunia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonEvoluniaServerKeywordPage />;
}
