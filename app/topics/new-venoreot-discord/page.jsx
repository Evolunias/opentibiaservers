import NewVenoreotDiscordKeywordPage, { generateMetadata } from './new-venoreot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewVenoreotDiscordKeywordPage />;
}
