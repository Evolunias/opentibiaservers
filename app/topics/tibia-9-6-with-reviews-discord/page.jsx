import Tibia96WithReviewsDiscordKeywordPage, { generateMetadata } from './tibia-9-6-with-reviews-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96WithReviewsDiscordKeywordPage />;
}
