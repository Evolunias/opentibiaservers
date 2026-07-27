import NewSeasonNepreniaTibiaKeywordPage, { generateMetadata } from './new-season-neprenia-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonNepreniaTibiaKeywordPage />;
}
