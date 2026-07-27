import WithDiscordDemolidoresKeywordPage, { generateMetadata } from './with-discord-demolidores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordDemolidoresKeywordPage />;
}
