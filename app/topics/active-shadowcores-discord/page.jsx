import ActiveShadowcoresDiscordKeywordPage, { generateMetadata } from './active-shadowcores-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveShadowcoresDiscordKeywordPage />;
}
