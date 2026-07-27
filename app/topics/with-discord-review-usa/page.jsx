import WithDiscordReviewUsaKeywordPage, { generateMetadata } from './with-discord-review-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordReviewUsaKeywordPage />;
}
