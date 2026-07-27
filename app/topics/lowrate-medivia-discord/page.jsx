import LowrateMediviaDiscordKeywordPage, { generateMetadata } from './lowrate-medivia-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateMediviaDiscordKeywordPage />;
}
