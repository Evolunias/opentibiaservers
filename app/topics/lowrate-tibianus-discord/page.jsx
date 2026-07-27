import LowrateTibianusDiscordKeywordPage, { generateMetadata } from './lowrate-tibianus-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateTibianusDiscordKeywordPage />;
}
