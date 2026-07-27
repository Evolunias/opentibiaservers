import NoResetCoxaotDiscordKeywordPage, { generateMetadata } from './no-reset-coxaot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetCoxaotDiscordKeywordPage />;
}
