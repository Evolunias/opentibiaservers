import WithDiscordNoxiousotClientKeywordPage, { generateMetadata } from './with-discord-noxiousot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordNoxiousotClientKeywordPage />;
}
