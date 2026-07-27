import OldSchoolPlayersOnlineCanadaKeywordPage, { generateMetadata } from './old-school-players-online-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolPlayersOnlineCanadaKeywordPage />;
}
