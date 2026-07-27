import PopularLumineraDiscordKeywordPage, { generateMetadata } from './popular-luminera-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularLumineraDiscordKeywordPage />;
}
