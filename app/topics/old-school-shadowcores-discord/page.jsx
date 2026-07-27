import OldSchoolShadowcoresDiscordKeywordPage, { generateMetadata } from './old-school-shadowcores-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolShadowcoresDiscordKeywordPage />;
}
