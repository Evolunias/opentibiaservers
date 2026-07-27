import WithDiscordWikiBrazilKeywordPage, { generateMetadata } from './with-discord-wiki-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordWikiBrazilKeywordPage />;
}
