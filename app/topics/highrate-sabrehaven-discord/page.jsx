import HighrateSabrehavenDiscordKeywordPage, { generateMetadata } from './highrate-sabrehaven-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateSabrehavenDiscordKeywordPage />;
}
