import WithDiscordNoxiousotKeywordPage, { generateMetadata } from './with-discord-noxiousot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordNoxiousotKeywordPage />;
}
