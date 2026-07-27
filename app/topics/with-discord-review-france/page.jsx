import WithDiscordReviewFranceKeywordPage, { generateMetadata } from './with-discord-review-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordReviewFranceKeywordPage />;
}
