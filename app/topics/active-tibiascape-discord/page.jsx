import ActiveTibiascapeDiscordKeywordPage, { generateMetadata } from './active-tibiascape-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTibiascapeDiscordKeywordPage />;
}
