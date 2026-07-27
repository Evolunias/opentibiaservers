import Tibia11WithDiscordReviewKeywordPage, { generateMetadata } from './tibia-11-with-discord-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11WithDiscordReviewKeywordPage />;
}
