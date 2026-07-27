import Tibia14WithReviewsDiscordKeywordPage, { generateMetadata } from './tibia-14-with-reviews-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14WithReviewsDiscordKeywordPage />;
}
