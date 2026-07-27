import WithDiscordArcaniarlOtServerKeywordPage, { generateMetadata } from './with-discord-arcaniarl-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordArcaniarlOtServerKeywordPage />;
}
