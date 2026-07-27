import WithDiscordArcaniarlLoginKeywordPage, { generateMetadata } from './with-discord-arcaniarl-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordArcaniarlLoginKeywordPage />;
}
