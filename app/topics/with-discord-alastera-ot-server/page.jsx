import WithDiscordAlasteraOtServerKeywordPage, { generateMetadata } from './with-discord-alastera-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordAlasteraOtServerKeywordPage />;
}
