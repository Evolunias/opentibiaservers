import WithDiscordKasteriaOtKeywordPage, { generateMetadata } from './with-discord-kasteria-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordKasteriaOtKeywordPage />;
}
