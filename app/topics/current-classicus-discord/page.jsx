import CurrentClassicusDiscordKeywordPage, { generateMetadata } from './current-classicus-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentClassicusDiscordKeywordPage />;
}
