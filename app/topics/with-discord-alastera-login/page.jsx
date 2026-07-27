import WithDiscordAlasteraLoginKeywordPage, { generateMetadata } from './with-discord-alastera-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordAlasteraLoginKeywordPage />;
}
