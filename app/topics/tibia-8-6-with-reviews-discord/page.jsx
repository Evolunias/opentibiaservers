import Tibia86WithReviewsDiscordKeywordPage, { generateMetadata } from './tibia-8-6-with-reviews-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86WithReviewsDiscordKeywordPage />;
}
