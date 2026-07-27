import RealeraDiscordKeywordPage, { generateMetadata } from './realera-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealeraDiscordKeywordPage />;
}
