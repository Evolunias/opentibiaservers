import PopularXanteriaDiscordKeywordPage, { generateMetadata } from './popular-xanteria-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularXanteriaDiscordKeywordPage />;
}
