import Tibia11WithReviewsDiscordKeywordPage, { generateMetadata } from './tibia-11-with-reviews-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11WithReviewsDiscordKeywordPage />;
}
