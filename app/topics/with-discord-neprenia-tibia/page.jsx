import WithDiscordNepreniaTibiaKeywordPage, { generateMetadata } from './with-discord-neprenia-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordNepreniaTibiaKeywordPage />;
}
