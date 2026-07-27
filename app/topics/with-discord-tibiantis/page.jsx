import WithDiscordTibiantisKeywordPage, { generateMetadata } from './with-discord-tibiantis';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordTibiantisKeywordPage />;
}
