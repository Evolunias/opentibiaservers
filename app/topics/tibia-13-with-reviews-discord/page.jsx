import Tibia13WithReviewsDiscordKeywordPage, { generateMetadata } from './tibia-13-with-reviews-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13WithReviewsDiscordKeywordPage />;
}
