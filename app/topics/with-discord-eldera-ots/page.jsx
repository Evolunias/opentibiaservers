import WithDiscordElderaOtsKeywordPage, { generateMetadata } from './with-discord-eldera-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordElderaOtsKeywordPage />;
}
