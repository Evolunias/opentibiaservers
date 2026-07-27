import Tibia84WithReviewsDiscordKeywordPage, { generateMetadata } from './tibia-8-4-with-reviews-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84WithReviewsDiscordKeywordPage />;
}
