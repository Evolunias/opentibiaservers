import WithDiscordAmeriaTibiaKeywordPage, { generateMetadata } from './with-discord-ameria-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordAmeriaTibiaKeywordPage />;
}
