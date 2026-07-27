import WithDiscordCalmeraOtLoginKeywordPage, { generateMetadata } from './with-discord-calmera-ot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordCalmeraOtLoginKeywordPage />;
}
