import NewSeasonClassicusTibiaKeywordPage, { generateMetadata } from './new-season-classicus-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonClassicusTibiaKeywordPage />;
}
