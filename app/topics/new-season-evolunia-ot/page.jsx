import NewSeasonEvoluniaOtKeywordPage, { generateMetadata } from './new-season-evolunia-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonEvoluniaOtKeywordPage />;
}
