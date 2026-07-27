import WithDiscordShadowcoresOpenTibiaKeywordPage, { generateMetadata } from './with-discord-shadowcores-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordShadowcoresOpenTibiaKeywordPage />;
}
