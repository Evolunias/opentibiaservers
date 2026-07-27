import MadnessaliveDiscordKeywordPage, { generateMetadata } from './madnessalive-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MadnessaliveDiscordKeywordPage />;
}
