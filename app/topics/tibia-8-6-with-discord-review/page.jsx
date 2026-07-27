import Tibia86WithDiscordReviewKeywordPage, { generateMetadata } from './tibia-8-6-with-discord-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86WithDiscordReviewKeywordPage />;
}
