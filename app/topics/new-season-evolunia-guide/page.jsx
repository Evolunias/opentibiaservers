import NewSeasonEvoluniaGuideKeywordPage, { generateMetadata } from './new-season-evolunia-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonEvoluniaGuideKeywordPage />;
}
