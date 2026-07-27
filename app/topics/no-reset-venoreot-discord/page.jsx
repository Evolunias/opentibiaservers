import NoResetVenoreotDiscordKeywordPage, { generateMetadata } from './no-reset-venoreot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetVenoreotDiscordKeywordPage />;
}
