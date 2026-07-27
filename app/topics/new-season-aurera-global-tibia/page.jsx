import NewSeasonAureraGlobalTibiaKeywordPage, { generateMetadata } from './new-season-aurera-global-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonAureraGlobalTibiaKeywordPage />;
}
