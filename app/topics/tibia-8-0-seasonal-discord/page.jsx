import Tibia80SeasonalDiscordKeywordPage, { generateMetadata } from './tibia-8-0-seasonal-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80SeasonalDiscordKeywordPage />;
}
