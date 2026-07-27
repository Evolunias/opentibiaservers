import WithDiscordImperianicTibiaKeywordPage, { generateMetadata } from './with-discord-imperianic-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordImperianicTibiaKeywordPage />;
}
