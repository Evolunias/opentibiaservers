import WithDiscordDuraOnlineTibiaKeywordPage, { generateMetadata } from './with-discord-dura-online-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordDuraOnlineTibiaKeywordPage />;
}
