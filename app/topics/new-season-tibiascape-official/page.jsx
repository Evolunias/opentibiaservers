import NewSeasonTibiascapeOfficialKeywordPage, { generateMetadata } from './new-season-tibiascape-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonTibiascapeOfficialKeywordPage />;
}
