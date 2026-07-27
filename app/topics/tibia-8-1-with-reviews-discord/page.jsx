import Tibia81WithReviewsDiscordKeywordPage, { generateMetadata } from './tibia-8-1-with-reviews-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81WithReviewsDiscordKeywordPage />;
}
