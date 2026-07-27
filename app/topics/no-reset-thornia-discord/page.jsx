import NoResetThorniaDiscordKeywordPage, { generateMetadata } from './no-reset-thornia-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetThorniaDiscordKeywordPage />;
}
