import NewSeasonEvoluniaOtServerKeywordPage, { generateMetadata } from './new-season-evolunia-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonEvoluniaOtServerKeywordPage />;
}
