import PopularAureraGlobalDiscordKeywordPage, { generateMetadata } from './popular-aurera-global-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularAureraGlobalDiscordKeywordPage />;
}
