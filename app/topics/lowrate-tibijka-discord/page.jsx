import LowrateTibijkaDiscordKeywordPage, { generateMetadata } from './lowrate-tibijka-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateTibijkaDiscordKeywordPage />;
}
