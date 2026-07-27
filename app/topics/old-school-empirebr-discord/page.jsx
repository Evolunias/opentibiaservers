import OldSchoolEmpirebrDiscordKeywordPage, { generateMetadata } from './old-school-empirebr-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolEmpirebrDiscordKeywordPage />;
}
