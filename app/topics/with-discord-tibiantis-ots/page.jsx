import WithDiscordTibiantisOtsKeywordPage, { generateMetadata } from './with-discord-tibiantis-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordTibiantisOtsKeywordPage />;
}
