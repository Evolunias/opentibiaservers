import WithDiscordLumineraKeywordPage, { generateMetadata } from './with-discord-luminera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordLumineraKeywordPage />;
}
