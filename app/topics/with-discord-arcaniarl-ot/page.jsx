import WithDiscordArcaniarlOtKeywordPage, { generateMetadata } from './with-discord-arcaniarl-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordArcaniarlOtKeywordPage />;
}
