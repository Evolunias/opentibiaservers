import NewSeasonKasteriaTibiaKeywordPage, { generateMetadata } from './new-season-kasteria-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonKasteriaTibiaKeywordPage />;
}
