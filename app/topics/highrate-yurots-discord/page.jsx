import HighrateYurotsDiscordKeywordPage, { generateMetadata } from './highrate-yurots-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateYurotsDiscordKeywordPage />;
}
