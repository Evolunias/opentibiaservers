import Tibia13BaiakDiscordKeywordPage, { generateMetadata } from './tibia-13-baiak-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13BaiakDiscordKeywordPage />;
}
