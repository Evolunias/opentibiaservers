import WithDiscordShadowcoresOtsKeywordPage, { generateMetadata } from './with-discord-shadowcores-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordShadowcoresOtsKeywordPage />;
}
