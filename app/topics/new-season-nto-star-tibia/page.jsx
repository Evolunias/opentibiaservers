import NewSeasonNtoStarTibiaKeywordPage, { generateMetadata } from './new-season-nto-star-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonNtoStarTibiaKeywordPage />;
}
