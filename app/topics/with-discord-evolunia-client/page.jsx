import WithDiscordEvoluniaClientKeywordPage, { generateMetadata } from './with-discord-evolunia-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordEvoluniaClientKeywordPage />;
}
