import Tibia96WithDiscordReviewKeywordPage, { generateMetadata } from './tibia-9-6-with-discord-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96WithDiscordReviewKeywordPage />;
}
