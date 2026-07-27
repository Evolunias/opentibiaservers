import WithDiscordHarmoniaOtLoginKeywordPage, { generateMetadata } from './with-discord-harmonia-ot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordHarmoniaOtLoginKeywordPage />;
}
