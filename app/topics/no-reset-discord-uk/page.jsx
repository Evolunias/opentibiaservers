import NoResetDiscordUkKeywordPage, { generateMetadata } from './no-reset-discord-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetDiscordUkKeywordPage />;
}
