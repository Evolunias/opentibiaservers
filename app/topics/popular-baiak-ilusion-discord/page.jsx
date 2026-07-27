import PopularBaiakIlusionDiscordKeywordPage, { generateMetadata } from './popular-baiak-ilusion-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularBaiakIlusionDiscordKeywordPage />;
}
