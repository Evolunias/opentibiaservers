import FreshStartXanteriaDiscordKeywordPage, { generateMetadata } from './fresh-start-xanteria-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartXanteriaDiscordKeywordPage />;
}
