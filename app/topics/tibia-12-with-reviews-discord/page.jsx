import Tibia12WithReviewsDiscordKeywordPage, { generateMetadata } from './tibia-12-with-reviews-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12WithReviewsDiscordKeywordPage />;
}
