import WithDiscordShadowcoresServerKeywordPage, { generateMetadata } from './with-discord-shadowcores-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordShadowcoresServerKeywordPage />;
}
