import NoResetDiscordUsaKeywordPage, { generateMetadata } from './no-reset-discord-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetDiscordUsaKeywordPage />;
}
