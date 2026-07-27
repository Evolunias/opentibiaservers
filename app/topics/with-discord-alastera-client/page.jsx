import WithDiscordAlasteraClientKeywordPage, { generateMetadata } from './with-discord-alastera-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordAlasteraClientKeywordPage />;
}
