import ActiveEvoluniaDiscordKeywordPage, { generateMetadata } from './active-evolunia-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveEvoluniaDiscordKeywordPage />;
}
