import CurrentImperianicDiscordKeywordPage, { generateMetadata } from './current-imperianic-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentImperianicDiscordKeywordPage />;
}
