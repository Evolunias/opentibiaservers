import CurrentEvoluniaDiscordKeywordPage, { generateMetadata } from './current-evolunia-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentEvoluniaDiscordKeywordPage />;
}
