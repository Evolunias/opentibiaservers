import ActiveUnlineDiscordKeywordPage, { generateMetadata } from './active-unline-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveUnlineDiscordKeywordPage />;
}
