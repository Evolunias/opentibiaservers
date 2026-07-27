import BaiakIlusionDiscordKeywordPage, { generateMetadata } from './baiak-ilusion-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakIlusionDiscordKeywordPage />;
}
