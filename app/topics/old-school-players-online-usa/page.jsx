import OldSchoolPlayersOnlineUsaKeywordPage, { generateMetadata } from './old-school-players-online-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolPlayersOnlineUsaKeywordPage />;
}
