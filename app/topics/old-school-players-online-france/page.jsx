import OldSchoolPlayersOnlineFranceKeywordPage, { generateMetadata } from './old-school-players-online-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolPlayersOnlineFranceKeywordPage />;
}
