import CustomMidhemDiscordKeywordPage, { generateMetadata } from './custom-midhem-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMidhemDiscordKeywordPage />;
}
