import BaiakDiscordGermanyKeywordPage, { generateMetadata } from './baiak-discord-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakDiscordGermanyKeywordPage />;
}
