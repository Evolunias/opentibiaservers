import PopularZuneraOtDiscordKeywordPage, { generateMetadata } from './popular-zunera-ot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularZuneraOtDiscordKeywordPage />;
}
