import CurrentCalmeraOtDiscordKeywordPage, { generateMetadata } from './current-calmera-ot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentCalmeraOtDiscordKeywordPage />;
}
