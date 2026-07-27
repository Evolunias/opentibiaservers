import Tibia80WithReviewsDiscordKeywordPage, { generateMetadata } from './tibia-8-0-with-reviews-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80WithReviewsDiscordKeywordPage />;
}
