import Tibia13OldSchoolDiscordKeywordPage, { generateMetadata } from './tibia-13-old-school-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13OldSchoolDiscordKeywordPage />;
}
