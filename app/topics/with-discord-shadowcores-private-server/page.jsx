import WithDiscordShadowcoresPrivateServerKeywordPage, { generateMetadata } from './with-discord-shadowcores-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordShadowcoresPrivateServerKeywordPage />;
}
