import NewSeasonAureraGlobalKeywordPage, { generateMetadata } from './new-season-aurera-global';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonAureraGlobalKeywordPage />;
}
