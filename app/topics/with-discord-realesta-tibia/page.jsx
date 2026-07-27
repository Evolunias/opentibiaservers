import WithDiscordRealestaTibiaKeywordPage, { generateMetadata } from './with-discord-realesta-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordRealestaTibiaKeywordPage />;
}
