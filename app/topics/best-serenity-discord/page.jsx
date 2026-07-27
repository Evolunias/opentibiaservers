import BestSerenityDiscordKeywordPage, { generateMetadata } from './best-serenity-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestSerenityDiscordKeywordPage />;
}
