import Tibia100WithReviewsDiscordKeywordPage, { generateMetadata } from './tibia-10-0-with-reviews-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100WithReviewsDiscordKeywordPage />;
}
