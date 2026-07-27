import WithDiscordAmeriaOtsKeywordPage, { generateMetadata } from './with-discord-ameria-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordAmeriaOtsKeywordPage />;
}
