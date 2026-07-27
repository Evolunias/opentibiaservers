import PopularEvoluniaDiscordKeywordPage, { generateMetadata } from './popular-evolunia-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularEvoluniaDiscordKeywordPage />;
}
