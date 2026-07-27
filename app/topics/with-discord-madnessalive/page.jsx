import WithDiscordMadnessaliveKeywordPage, { generateMetadata } from './with-discord-madnessalive';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordMadnessaliveKeywordPage />;
}
