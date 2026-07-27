import CurrentZuneraOtDiscordKeywordPage, { generateMetadata } from './current-zunera-ot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentZuneraOtDiscordKeywordPage />;
}
