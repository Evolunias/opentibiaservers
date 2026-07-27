import ActiveTibianusDiscordKeywordPage, { generateMetadata } from './active-tibianus-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTibianusDiscordKeywordPage />;
}
