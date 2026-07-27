import NewSeasonAlasteraTibiaKeywordPage, { generateMetadata } from './new-season-alastera-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonAlasteraTibiaKeywordPage />;
}
