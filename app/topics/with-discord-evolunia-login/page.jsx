import WithDiscordEvoluniaLoginKeywordPage, { generateMetadata } from './with-discord-evolunia-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordEvoluniaLoginKeywordPage />;
}
