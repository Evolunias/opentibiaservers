import OldSchoolNoxiousotDiscordKeywordPage, { generateMetadata } from './old-school-noxiousot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolNoxiousotDiscordKeywordPage />;
}
