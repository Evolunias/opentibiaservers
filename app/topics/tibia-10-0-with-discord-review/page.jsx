import Tibia100WithDiscordReviewKeywordPage, { generateMetadata } from './tibia-10-0-with-discord-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100WithDiscordReviewKeywordPage />;
}
