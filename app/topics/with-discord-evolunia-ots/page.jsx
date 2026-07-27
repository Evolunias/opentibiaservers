import WithDiscordEvoluniaOtsKeywordPage, { generateMetadata } from './with-discord-evolunia-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordEvoluniaOtsKeywordPage />;
}
