import WithDiscordEvoluniaOtKeywordPage, { generateMetadata } from './with-discord-evolunia-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordEvoluniaOtKeywordPage />;
}
