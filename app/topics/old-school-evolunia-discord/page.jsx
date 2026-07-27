import OldSchoolEvoluniaDiscordKeywordPage, { generateMetadata } from './old-school-evolunia-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolEvoluniaDiscordKeywordPage />;
}
