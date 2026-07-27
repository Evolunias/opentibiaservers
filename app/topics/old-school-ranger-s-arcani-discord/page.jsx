import OldSchoolRangerSArcaniDiscordKeywordPage, { generateMetadata } from './old-school-ranger-s-arcani-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolRangerSArcaniDiscordKeywordPage />;
}
