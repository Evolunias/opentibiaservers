import ActiveCalmeraOtDiscordKeywordPage, { generateMetadata } from './active-calmera-ot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveCalmeraOtDiscordKeywordPage />;
}
