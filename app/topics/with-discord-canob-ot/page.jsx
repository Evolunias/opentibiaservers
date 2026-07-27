import WithDiscordCanobOtKeywordPage, { generateMetadata } from './with-discord-canob-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordCanobOtKeywordPage />;
}
