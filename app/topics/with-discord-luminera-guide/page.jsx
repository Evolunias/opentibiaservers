import WithDiscordLumineraGuideKeywordPage, { generateMetadata } from './with-discord-luminera-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordLumineraGuideKeywordPage />;
}
