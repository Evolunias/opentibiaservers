import WithDiscordAlasteraOtsKeywordPage, { generateMetadata } from './with-discord-alastera-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordAlasteraOtsKeywordPage />;
}
