import NewSeasonYurotsOfficialKeywordPage, { generateMetadata } from './new-season-yurots-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonYurotsOfficialKeywordPage />;
}
