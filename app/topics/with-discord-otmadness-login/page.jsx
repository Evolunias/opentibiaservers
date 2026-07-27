import WithDiscordOtmadnessLoginKeywordPage, { generateMetadata } from './with-discord-otmadness-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordOtmadnessLoginKeywordPage />;
}
