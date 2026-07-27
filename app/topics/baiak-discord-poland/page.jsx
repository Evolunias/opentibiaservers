import BaiakDiscordPolandKeywordPage, { generateMetadata } from './baiak-discord-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakDiscordPolandKeywordPage />;
}
