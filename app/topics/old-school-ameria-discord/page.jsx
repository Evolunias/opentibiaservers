import OldSchoolAmeriaDiscordKeywordPage, { generateMetadata } from './old-school-ameria-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolAmeriaDiscordKeywordPage />;
}
