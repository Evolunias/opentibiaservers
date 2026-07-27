import MadnessaliveGuildsKeywordPage, { generateMetadata } from './madnessalive-guilds';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MadnessaliveGuildsKeywordPage />;
}
