import NewSeasonEvoleraTibiaKeywordPage, { generateMetadata } from './new-season-evolera-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonEvoleraTibiaKeywordPage />;
}
