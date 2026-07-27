import NewSeasonYurotsTibiaKeywordPage, { generateMetadata } from './new-season-yurots-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonYurotsTibiaKeywordPage />;
}
