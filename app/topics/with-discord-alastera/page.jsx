import WithDiscordAlasteraKeywordPage, { generateMetadata } from './with-discord-alastera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordAlasteraKeywordPage />;
}
