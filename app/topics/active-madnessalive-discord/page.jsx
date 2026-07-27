import ActiveMadnessaliveDiscordKeywordPage, { generateMetadata } from './active-madnessalive-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveMadnessaliveDiscordKeywordPage />;
}
