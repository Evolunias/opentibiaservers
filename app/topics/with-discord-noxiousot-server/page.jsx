import WithDiscordNoxiousotServerKeywordPage, { generateMetadata } from './with-discord-noxiousot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordNoxiousotServerKeywordPage />;
}
