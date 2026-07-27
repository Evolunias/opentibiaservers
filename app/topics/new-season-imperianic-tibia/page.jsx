import NewSeasonImperianicTibiaKeywordPage, { generateMetadata } from './new-season-imperianic-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonImperianicTibiaKeywordPage />;
}
