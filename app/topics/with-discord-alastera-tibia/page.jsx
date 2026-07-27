import WithDiscordAlasteraTibiaKeywordPage, { generateMetadata } from './with-discord-alastera-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordAlasteraTibiaKeywordPage />;
}
