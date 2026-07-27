import Tibia80OldSchoolDiscordKeywordPage, { generateMetadata } from './tibia-8-0-old-school-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80OldSchoolDiscordKeywordPage />;
}
