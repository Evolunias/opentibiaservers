import WithReviewsEmpirebrDiscordKeywordPage, { generateMetadata } from './with-reviews-empirebr-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsEmpirebrDiscordKeywordPage />;
}
