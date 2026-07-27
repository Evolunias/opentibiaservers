import OldSchoolPlayersOnlineEuropeKeywordPage, { generateMetadata } from './old-school-players-online-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolPlayersOnlineEuropeKeywordPage />;
}
