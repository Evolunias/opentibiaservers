import WithDiscordXanteriaOpenTibiaKeywordPage, { generateMetadata } from './with-discord-xanteria-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordXanteriaOpenTibiaKeywordPage />;
}
