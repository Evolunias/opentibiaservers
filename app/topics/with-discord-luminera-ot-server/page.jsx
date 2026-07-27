import WithDiscordLumineraOtServerKeywordPage, { generateMetadata } from './with-discord-luminera-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordLumineraOtServerKeywordPage />;
}
