import BestImperianicDiscordKeywordPage, { generateMetadata } from './best-imperianic-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestImperianicDiscordKeywordPage />;
}
