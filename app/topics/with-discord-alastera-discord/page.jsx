import WithDiscordAlasteraDiscordKeywordPage, { generateMetadata } from './with-discord-alastera-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordAlasteraDiscordKeywordPage />;
}
