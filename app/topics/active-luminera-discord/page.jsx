import ActiveLumineraDiscordKeywordPage, { generateMetadata } from './active-luminera-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveLumineraDiscordKeywordPage />;
}
