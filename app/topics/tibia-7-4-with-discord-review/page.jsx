import Tibia74WithDiscordReviewKeywordPage, { generateMetadata } from './tibia-7-4-with-discord-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74WithDiscordReviewKeywordPage />;
}
