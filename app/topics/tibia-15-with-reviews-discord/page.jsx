import Tibia15WithReviewsDiscordKeywordPage, { generateMetadata } from './tibia-15-with-reviews-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15WithReviewsDiscordKeywordPage />;
}
