import NoResetSerenityDiscordKeywordPage, { generateMetadata } from './no-reset-serenity-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetSerenityDiscordKeywordPage />;
}
