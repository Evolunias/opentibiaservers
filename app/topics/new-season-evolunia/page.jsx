import NewSeasonEvoluniaKeywordPage, { generateMetadata } from './new-season-evolunia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonEvoluniaKeywordPage />;
}
