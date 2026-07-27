import Tibia76WithReviewsDiscordKeywordPage, { generateMetadata } from './tibia-7-6-with-reviews-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76WithReviewsDiscordKeywordPage />;
}
