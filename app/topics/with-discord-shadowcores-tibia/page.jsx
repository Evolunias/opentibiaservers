import WithDiscordShadowcoresTibiaKeywordPage, { generateMetadata } from './with-discord-shadowcores-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordShadowcoresTibiaKeywordPage />;
}
