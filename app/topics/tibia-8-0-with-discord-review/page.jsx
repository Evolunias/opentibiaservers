import Tibia80WithDiscordReviewKeywordPage, { generateMetadata } from './tibia-8-0-with-discord-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80WithDiscordReviewKeywordPage />;
}
