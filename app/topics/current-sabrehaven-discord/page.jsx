import CurrentSabrehavenDiscordKeywordPage, { generateMetadata } from './current-sabrehaven-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentSabrehavenDiscordKeywordPage />;
}
