import HighrateTibijkaDiscordKeywordPage, { generateMetadata } from './highrate-tibijka-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateTibijkaDiscordKeywordPage />;
}
