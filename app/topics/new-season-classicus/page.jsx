import NewSeasonClassicusKeywordPage, { generateMetadata } from './new-season-classicus';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonClassicusKeywordPage />;
}
