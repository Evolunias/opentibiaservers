import BaiakServerDiscordKeywordPage, { generateMetadata } from './baiak-server-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakServerDiscordKeywordPage />;
}
