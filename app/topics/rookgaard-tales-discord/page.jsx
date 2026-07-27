import RookgaardTalesDiscordKeywordPage, { generateMetadata } from './rookgaard-tales-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RookgaardTalesDiscordKeywordPage />;
}
