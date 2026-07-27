import Tibia74SeasonalDiscordKeywordPage, { generateMetadata } from './tibia-7-4-seasonal-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74SeasonalDiscordKeywordPage />;
}
