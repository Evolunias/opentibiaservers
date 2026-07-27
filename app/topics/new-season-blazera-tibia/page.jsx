import NewSeasonBlazeraTibiaKeywordPage, { generateMetadata } from './new-season-blazera-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonBlazeraTibiaKeywordPage />;
}
