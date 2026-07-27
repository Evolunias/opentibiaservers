import WithDiscordNtoStarOtsKeywordPage, { generateMetadata } from './with-discord-nto-star-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordNtoStarOtsKeywordPage />;
}
