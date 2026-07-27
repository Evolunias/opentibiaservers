import Tibia11OldSchoolDiscordKeywordPage, { generateMetadata } from './tibia-11-old-school-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11OldSchoolDiscordKeywordPage />;
}
