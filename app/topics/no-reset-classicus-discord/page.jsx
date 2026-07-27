import NoResetClassicusDiscordKeywordPage, { generateMetadata } from './no-reset-classicus-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetClassicusDiscordKeywordPage />;
}
