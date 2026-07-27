import NewAureraGlobalDiscordKeywordPage, { generateMetadata } from './new-aurera-global-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewAureraGlobalDiscordKeywordPage />;
}
