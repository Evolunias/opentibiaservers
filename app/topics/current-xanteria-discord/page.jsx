import CurrentXanteriaDiscordKeywordPage, { generateMetadata } from './current-xanteria-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentXanteriaDiscordKeywordPage />;
}
