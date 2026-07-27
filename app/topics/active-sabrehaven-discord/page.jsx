import ActiveSabrehavenDiscordKeywordPage, { generateMetadata } from './active-sabrehaven-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveSabrehavenDiscordKeywordPage />;
}
