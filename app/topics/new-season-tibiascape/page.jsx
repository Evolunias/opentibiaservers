import NewSeasonTibiascapeKeywordPage, { generateMetadata } from './new-season-tibiascape';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonTibiascapeKeywordPage />;
}
