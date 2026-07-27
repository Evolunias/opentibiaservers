import Tibia14BaiakDiscordKeywordPage, { generateMetadata } from './tibia-14-baiak-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14BaiakDiscordKeywordPage />;
}
