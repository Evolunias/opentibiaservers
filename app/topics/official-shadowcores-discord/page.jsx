import OfficialShadowcoresDiscordKeywordPage, { generateMetadata } from './official-shadowcores-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialShadowcoresDiscordKeywordPage />;
}
