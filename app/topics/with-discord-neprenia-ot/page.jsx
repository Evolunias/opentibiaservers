import WithDiscordNepreniaOtKeywordPage, { generateMetadata } from './with-discord-neprenia-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordNepreniaOtKeywordPage />;
}
