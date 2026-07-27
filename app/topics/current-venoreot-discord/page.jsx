import CurrentVenoreotDiscordKeywordPage, { generateMetadata } from './current-venoreot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentVenoreotDiscordKeywordPage />;
}
