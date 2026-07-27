import Tibia76WithDiscordReviewKeywordPage, { generateMetadata } from './tibia-7-6-with-discord-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76WithDiscordReviewKeywordPage />;
}
