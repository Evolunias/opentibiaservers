import Tibia86OldSchoolDiscordKeywordPage, { generateMetadata } from './tibia-8-6-old-school-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86OldSchoolDiscordKeywordPage />;
}
