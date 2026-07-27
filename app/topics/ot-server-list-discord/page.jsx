import OtServerListDiscordKeywordPage, { generateMetadata } from './ot-server-list-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtServerListDiscordKeywordPage />;
}
