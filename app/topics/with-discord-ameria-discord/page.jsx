import WithDiscordAmeriaDiscordKeywordPage, { generateMetadata } from './with-discord-ameria-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordAmeriaDiscordKeywordPage />;
}
