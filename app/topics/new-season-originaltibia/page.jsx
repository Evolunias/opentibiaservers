import NewSeasonOriginaltibiaKeywordPage, { generateMetadata } from './new-season-originaltibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonOriginaltibiaKeywordPage />;
}
