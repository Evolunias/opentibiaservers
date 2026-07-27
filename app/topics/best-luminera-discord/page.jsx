import BestLumineraDiscordKeywordPage, { generateMetadata } from './best-luminera-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestLumineraDiscordKeywordPage />;
}
