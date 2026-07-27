import BestArchlightDiscordKeywordPage, { generateMetadata } from './best-archlight-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestArchlightDiscordKeywordPage />;
}
