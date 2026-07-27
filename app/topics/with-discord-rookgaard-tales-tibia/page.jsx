import WithDiscordRookgaardTalesTibiaKeywordPage, { generateMetadata } from './with-discord-rookgaard-tales-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordRookgaardTalesTibiaKeywordPage />;
}
