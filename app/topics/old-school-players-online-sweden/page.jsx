import OldSchoolPlayersOnlineSwedenKeywordPage, { generateMetadata } from './old-school-players-online-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolPlayersOnlineSwedenKeywordPage />;
}
