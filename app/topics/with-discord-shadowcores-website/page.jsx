import WithDiscordShadowcoresWebsiteKeywordPage, { generateMetadata } from './with-discord-shadowcores-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordShadowcoresWebsiteKeywordPage />;
}
