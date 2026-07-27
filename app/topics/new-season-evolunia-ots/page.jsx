import NewSeasonEvoluniaOtsKeywordPage, { generateMetadata } from './new-season-evolunia-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonEvoluniaOtsKeywordPage />;
}
