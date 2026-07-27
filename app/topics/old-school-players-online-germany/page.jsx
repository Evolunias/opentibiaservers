import OldSchoolPlayersOnlineGermanyKeywordPage, { generateMetadata } from './old-school-players-online-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolPlayersOnlineGermanyKeywordPage />;
}
