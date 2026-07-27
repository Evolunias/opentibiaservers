import NewSabrehavenDiscordKeywordPage, { generateMetadata } from './new-sabrehaven-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSabrehavenDiscordKeywordPage />;
}
