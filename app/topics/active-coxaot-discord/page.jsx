import ActiveCoxaotDiscordKeywordPage, { generateMetadata } from './active-coxaot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveCoxaotDiscordKeywordPage />;
}
