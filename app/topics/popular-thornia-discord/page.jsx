import PopularThorniaDiscordKeywordPage, { generateMetadata } from './popular-thornia-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularThorniaDiscordKeywordPage />;
}
