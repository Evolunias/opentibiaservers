import WithDiscordElderaServerKeywordPage, { generateMetadata } from './with-discord-eldera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordElderaServerKeywordPage />;
}
