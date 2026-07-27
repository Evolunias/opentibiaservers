import Tibia71WithDiscordReviewKeywordPage, { generateMetadata } from './tibia-7-1-with-discord-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71WithDiscordReviewKeywordPage />;
}
