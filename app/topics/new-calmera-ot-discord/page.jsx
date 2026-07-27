import NewCalmeraOtDiscordKeywordPage, { generateMetadata } from './new-calmera-ot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewCalmeraOtDiscordKeywordPage />;
}
