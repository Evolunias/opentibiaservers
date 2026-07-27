import Tibia12OldSchoolDiscordKeywordPage, { generateMetadata } from './tibia-12-old-school-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12OldSchoolDiscordKeywordPage />;
}
