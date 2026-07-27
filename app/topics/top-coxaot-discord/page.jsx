import TopCoxaotDiscordKeywordPage, { generateMetadata } from './top-coxaot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopCoxaotDiscordKeywordPage />;
}
