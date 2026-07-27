import WithDiscordBlazeraOtServerKeywordPage, { generateMetadata } from './with-discord-blazera-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordBlazeraOtServerKeywordPage />;
}
