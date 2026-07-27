import Tibia74WithReviewsDiscordKeywordPage, { generateMetadata } from './tibia-7-4-with-reviews-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74WithReviewsDiscordKeywordPage />;
}
