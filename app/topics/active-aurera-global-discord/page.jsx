import ActiveAureraGlobalDiscordKeywordPage, { generateMetadata } from './active-aurera-global-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveAureraGlobalDiscordKeywordPage />;
}
