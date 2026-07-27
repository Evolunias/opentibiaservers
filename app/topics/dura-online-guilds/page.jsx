import DuraOnlineGuildsKeywordPage, { generateMetadata } from './dura-online-guilds';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnlineGuildsKeywordPage />;
}
