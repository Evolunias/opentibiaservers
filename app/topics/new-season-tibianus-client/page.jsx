import NewSeasonTibianusClientKeywordPage, { generateMetadata } from './new-season-tibianus-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonTibianusClientKeywordPage />;
}
