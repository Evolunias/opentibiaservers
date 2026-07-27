import WithDiscordElderaClientKeywordPage, { generateMetadata } from './with-discord-eldera-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordElderaClientKeywordPage />;
}
