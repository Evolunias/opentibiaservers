import NewSeasonUnlineKeywordPage, { generateMetadata } from './new-season-unline';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonUnlineKeywordPage />;
}
