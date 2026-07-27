import WithDiscordNoxiousotLoginKeywordPage, { generateMetadata } from './with-discord-noxiousot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordNoxiousotLoginKeywordPage />;
}
