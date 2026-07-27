import WithDiscordXanteriaKeywordPage, { generateMetadata } from './with-discord-xanteria';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordXanteriaKeywordPage />;
}
