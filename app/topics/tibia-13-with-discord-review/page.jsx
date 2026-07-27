import Tibia13WithDiscordReviewKeywordPage, { generateMetadata } from './tibia-13-with-discord-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13WithDiscordReviewKeywordPage />;
}
