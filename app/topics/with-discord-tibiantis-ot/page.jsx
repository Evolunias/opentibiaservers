import WithDiscordTibiantisOtKeywordPage, { generateMetadata } from './with-discord-tibiantis-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordTibiantisOtKeywordPage />;
}
