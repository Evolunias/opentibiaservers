import NewSeasonMediviaTibiaKeywordPage, { generateMetadata } from './new-season-medivia-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonMediviaTibiaKeywordPage />;
}
