import ActiveElderaDiscordKeywordPage, { generateMetadata } from './active-eldera-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveElderaDiscordKeywordPage />;
}
