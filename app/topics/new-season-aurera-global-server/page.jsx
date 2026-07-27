import NewSeasonAureraGlobalServerKeywordPage, { generateMetadata } from './new-season-aurera-global-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonAureraGlobalServerKeywordPage />;
}
