import WithReviewsHarmoniaOtDiscordKeywordPage, { generateMetadata } from './with-reviews-harmonia-ot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsHarmoniaOtDiscordKeywordPage />;
}
