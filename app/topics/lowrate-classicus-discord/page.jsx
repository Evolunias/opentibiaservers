import LowrateClassicusDiscordKeywordPage, { generateMetadata } from './lowrate-classicus-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateClassicusDiscordKeywordPage />;
}
