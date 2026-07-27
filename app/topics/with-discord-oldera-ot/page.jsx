import WithDiscordOlderaOtKeywordPage, { generateMetadata } from './with-discord-oldera-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordOlderaOtKeywordPage />;
}
