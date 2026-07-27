import CurrentBaiakIlusionDiscordKeywordPage, { generateMetadata } from './current-baiak-ilusion-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentBaiakIlusionDiscordKeywordPage />;
}
