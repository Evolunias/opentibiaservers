import BaiakIlusionGuildsKeywordPage, { generateMetadata } from './baiak-ilusion-guilds';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakIlusionGuildsKeywordPage />;
}
