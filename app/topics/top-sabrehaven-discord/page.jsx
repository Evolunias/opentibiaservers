import TopSabrehavenDiscordKeywordPage, { generateMetadata } from './top-sabrehaven-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopSabrehavenDiscordKeywordPage />;
}
