import WithDiscordShadowcoresKeywordPage, { generateMetadata } from './with-discord-shadowcores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordShadowcoresKeywordPage />;
}
