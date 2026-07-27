import NewSeasonMediviaKeywordPage, { generateMetadata } from './new-season-medivia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonMediviaKeywordPage />;
}
