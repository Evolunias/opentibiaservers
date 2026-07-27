import FreshStartMediviaDiscordKeywordPage, { generateMetadata } from './fresh-start-medivia-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartMediviaDiscordKeywordPage />;
}
