import WithDiscordElderaKeywordPage, { generateMetadata } from './with-discord-eldera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordElderaKeywordPage />;
}
