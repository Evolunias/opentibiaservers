import WithDiscordNtoStarOtKeywordPage, { generateMetadata } from './with-discord-nto-star-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordNtoStarOtKeywordPage />;
}
