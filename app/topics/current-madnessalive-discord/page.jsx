import CurrentMadnessaliveDiscordKeywordPage, { generateMetadata } from './current-madnessalive-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentMadnessaliveDiscordKeywordPage />;
}
