import OldSchoolArcaniarlDiscordKeywordPage, { generateMetadata } from './old-school-arcaniarl-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolArcaniarlDiscordKeywordPage />;
}
