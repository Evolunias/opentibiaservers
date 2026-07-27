import PopularArchlightDiscordKeywordPage, { generateMetadata } from './popular-archlight-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularArchlightDiscordKeywordPage />;
}
