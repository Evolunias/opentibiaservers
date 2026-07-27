import LowrateUnlineDiscordKeywordPage, { generateMetadata } from './lowrate-unline-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateUnlineDiscordKeywordPage />;
}
