import HighrateMediviaDiscordKeywordPage, { generateMetadata } from './highrate-medivia-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateMediviaDiscordKeywordPage />;
}
