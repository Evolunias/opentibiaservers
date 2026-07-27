import ActiveZuneraOtDiscordKeywordPage, { generateMetadata } from './active-zunera-ot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveZuneraOtDiscordKeywordPage />;
}
