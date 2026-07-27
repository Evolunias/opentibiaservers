import Tibia80BaiakDiscordKeywordPage, { generateMetadata } from './tibia-8-0-baiak-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80BaiakDiscordKeywordPage />;
}
