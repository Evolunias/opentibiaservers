import WithDiscordRookgaardTalesKeywordPage, { generateMetadata } from './with-discord-rookgaard-tales';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordRookgaardTalesKeywordPage />;
}
