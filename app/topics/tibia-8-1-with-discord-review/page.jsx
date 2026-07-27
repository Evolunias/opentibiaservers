import Tibia81WithDiscordReviewKeywordPage, { generateMetadata } from './tibia-8-1-with-discord-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81WithDiscordReviewKeywordPage />;
}
