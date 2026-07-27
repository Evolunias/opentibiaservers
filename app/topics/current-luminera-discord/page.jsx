import CurrentLumineraDiscordKeywordPage, { generateMetadata } from './current-luminera-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentLumineraDiscordKeywordPage />;
}
