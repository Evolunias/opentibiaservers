import Tibia84WithDiscordReviewKeywordPage, { generateMetadata } from './tibia-8-4-with-discord-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84WithDiscordReviewKeywordPage />;
}
