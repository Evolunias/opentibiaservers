import NewSeasonTibiascapeClientKeywordPage, { generateMetadata } from './new-season-tibiascape-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonTibiascapeClientKeywordPage />;
}
