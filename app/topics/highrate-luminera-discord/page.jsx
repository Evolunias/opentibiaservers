import HighrateLumineraDiscordKeywordPage, { generateMetadata } from './highrate-luminera-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateLumineraDiscordKeywordPage />;
}
