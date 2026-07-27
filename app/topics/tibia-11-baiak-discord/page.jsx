import Tibia11BaiakDiscordKeywordPage, { generateMetadata } from './tibia-11-baiak-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11BaiakDiscordKeywordPage />;
}
