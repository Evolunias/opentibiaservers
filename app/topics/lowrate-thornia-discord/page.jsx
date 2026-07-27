import LowrateThorniaDiscordKeywordPage, { generateMetadata } from './lowrate-thornia-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateThorniaDiscordKeywordPage />;
}
