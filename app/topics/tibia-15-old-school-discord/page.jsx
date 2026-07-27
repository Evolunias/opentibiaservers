import Tibia15OldSchoolDiscordKeywordPage, { generateMetadata } from './tibia-15-old-school-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15OldSchoolDiscordKeywordPage />;
}
