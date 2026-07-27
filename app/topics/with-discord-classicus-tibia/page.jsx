import WithDiscordClassicusTibiaKeywordPage, { generateMetadata } from './with-discord-classicus-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordClassicusTibiaKeywordPage />;
}
