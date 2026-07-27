import WithDiscordShadowcoresClientKeywordPage, { generateMetadata } from './with-discord-shadowcores-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordShadowcoresClientKeywordPage />;
}
