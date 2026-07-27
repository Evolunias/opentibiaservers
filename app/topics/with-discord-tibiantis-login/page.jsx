import WithDiscordTibiantisLoginKeywordPage, { generateMetadata } from './with-discord-tibiantis-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordTibiantisLoginKeywordPage />;
}
