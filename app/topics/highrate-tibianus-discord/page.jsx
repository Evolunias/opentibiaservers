import HighrateTibianusDiscordKeywordPage, { generateMetadata } from './highrate-tibianus-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateTibianusDiscordKeywordPage />;
}
