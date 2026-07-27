import WithDiscordLumineraOpenTibiaKeywordPage, { generateMetadata } from './with-discord-luminera-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordLumineraOpenTibiaKeywordPage />;
}
