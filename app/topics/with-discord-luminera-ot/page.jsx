import WithDiscordLumineraOtKeywordPage, { generateMetadata } from './with-discord-luminera-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordLumineraOtKeywordPage />;
}
