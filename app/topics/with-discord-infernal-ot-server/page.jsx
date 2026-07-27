import WithDiscordInfernalOtServerKeywordPage, { generateMetadata } from './with-discord-infernal-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordInfernalOtServerKeywordPage />;
}
