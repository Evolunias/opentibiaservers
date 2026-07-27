import NewCoxaotDiscordKeywordPage, { generateMetadata } from './new-coxaot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewCoxaotDiscordKeywordPage />;
}
