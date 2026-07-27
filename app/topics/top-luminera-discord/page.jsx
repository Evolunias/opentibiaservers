import TopLumineraDiscordKeywordPage, { generateMetadata } from './top-luminera-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopLumineraDiscordKeywordPage />;
}
