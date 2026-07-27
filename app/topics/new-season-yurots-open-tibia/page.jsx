import NewSeasonYurotsOpenTibiaKeywordPage, { generateMetadata } from './new-season-yurots-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonYurotsOpenTibiaKeywordPage />;
}
