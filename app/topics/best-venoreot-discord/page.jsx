import BestVenoreotDiscordKeywordPage, { generateMetadata } from './best-venoreot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestVenoreotDiscordKeywordPage />;
}
