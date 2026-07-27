import BaiakDiscordArgentinaKeywordPage, { generateMetadata } from './baiak-discord-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakDiscordArgentinaKeywordPage />;
}
