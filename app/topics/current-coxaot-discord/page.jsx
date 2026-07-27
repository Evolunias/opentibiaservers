import CurrentCoxaotDiscordKeywordPage, { generateMetadata } from './current-coxaot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentCoxaotDiscordKeywordPage />;
}
