import NewSeasonArcaniarlRegisterKeywordPage, { generateMetadata } from './new-season-arcaniarl-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonArcaniarlRegisterKeywordPage />;
}
