import OldSchoolNtoStarDiscordKeywordPage, { generateMetadata } from './old-school-nto-star-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolNtoStarDiscordKeywordPage />;
}
