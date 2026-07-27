import BestCoxaotDiscordKeywordPage, { generateMetadata } from './best-coxaot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestCoxaotDiscordKeywordPage />;
}
