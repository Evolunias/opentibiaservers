import WithDiscordReviewCanadaKeywordPage, { generateMetadata } from './with-discord-review-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordReviewCanadaKeywordPage />;
}
