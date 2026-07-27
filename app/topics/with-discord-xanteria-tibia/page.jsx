import WithDiscordXanteriaTibiaKeywordPage, { generateMetadata } from './with-discord-xanteria-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordXanteriaTibiaKeywordPage />;
}
