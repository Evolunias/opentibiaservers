import NoResetSabrehavenDiscordKeywordPage, { generateMetadata } from './no-reset-sabrehaven-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetSabrehavenDiscordKeywordPage />;
}
