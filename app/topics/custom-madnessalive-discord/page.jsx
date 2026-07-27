import CustomMadnessaliveDiscordKeywordPage, { generateMetadata } from './custom-madnessalive-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMadnessaliveDiscordKeywordPage />;
}
