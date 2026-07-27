import NewSeasonAureraGlobalGuideKeywordPage, { generateMetadata } from './new-season-aurera-global-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonAureraGlobalGuideKeywordPage />;
}
