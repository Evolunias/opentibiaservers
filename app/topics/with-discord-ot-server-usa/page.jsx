import WithDiscordOtServerUsaKeywordPage, { generateMetadata } from './with-discord-ot-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordOtServerUsaKeywordPage />;
}
