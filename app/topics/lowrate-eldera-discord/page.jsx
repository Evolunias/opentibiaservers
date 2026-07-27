import LowrateElderaDiscordKeywordPage, { generateMetadata } from './lowrate-eldera-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateElderaDiscordKeywordPage />;
}
