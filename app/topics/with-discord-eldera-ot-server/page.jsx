import WithDiscordElderaOtServerKeywordPage, { generateMetadata } from './with-discord-eldera-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordElderaOtServerKeywordPage />;
}
