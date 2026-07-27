import LowrateYurotsDiscordKeywordPage, { generateMetadata } from './lowrate-yurots-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateYurotsDiscordKeywordPage />;
}
