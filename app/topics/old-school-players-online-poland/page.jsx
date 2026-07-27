import OldSchoolPlayersOnlinePolandKeywordPage, { generateMetadata } from './old-school-players-online-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolPlayersOnlinePolandKeywordPage />;
}
