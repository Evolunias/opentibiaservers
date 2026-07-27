import ActiveThorniaDiscordKeywordPage, { generateMetadata } from './active-thornia-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveThorniaDiscordKeywordPage />;
}
