import NewSeasonEvoluniaOpenTibiaKeywordPage, { generateMetadata } from './new-season-evolunia-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonEvoluniaOpenTibiaKeywordPage />;
}
