import NoResetUnlineDiscordKeywordPage, { generateMetadata } from './no-reset-unline-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetUnlineDiscordKeywordPage />;
}
