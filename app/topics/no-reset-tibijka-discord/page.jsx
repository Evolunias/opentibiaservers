import NoResetTibijkaDiscordKeywordPage, { generateMetadata } from './no-reset-tibijka-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetTibijkaDiscordKeywordPage />;
}
