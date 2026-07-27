import WithDiscordTibijkaOtKeywordPage, { generateMetadata } from './with-discord-tibijka-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordTibijkaOtKeywordPage />;
}
