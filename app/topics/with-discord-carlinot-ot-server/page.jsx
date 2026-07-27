import WithDiscordCarlinotOtServerKeywordPage, { generateMetadata } from './with-discord-carlinot-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordCarlinotOtServerKeywordPage />;
}
