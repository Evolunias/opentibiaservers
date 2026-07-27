import OldSchoolTibiaServerWithPlayersKeywordPage, { generateMetadata } from './old-school-tibia-server-with-players';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibiaServerWithPlayersKeywordPage />;
}
