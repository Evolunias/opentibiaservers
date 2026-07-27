import ActiveClassicusDiscordKeywordPage, { generateMetadata } from './active-classicus-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveClassicusDiscordKeywordPage />;
}
