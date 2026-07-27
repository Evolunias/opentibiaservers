import Tibia12WithDiscordReviewKeywordPage, { generateMetadata } from './tibia-12-with-discord-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12WithDiscordReviewKeywordPage />;
}
