import NewSeasonClassicusClientKeywordPage, { generateMetadata } from './new-season-classicus-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonClassicusClientKeywordPage />;
}
