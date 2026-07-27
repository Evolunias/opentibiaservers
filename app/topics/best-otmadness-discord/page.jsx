import BestOtmadnessDiscordKeywordPage, { generateMetadata } from './best-otmadness-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestOtmadnessDiscordKeywordPage />;
}
