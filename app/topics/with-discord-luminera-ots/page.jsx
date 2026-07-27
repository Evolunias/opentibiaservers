import WithDiscordLumineraOtsKeywordPage, { generateMetadata } from './with-discord-luminera-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordLumineraOtsKeywordPage />;
}
