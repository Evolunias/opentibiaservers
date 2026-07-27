import WithDiscordRangerSArcaniKeywordPage, { generateMetadata } from './with-discord-ranger-s-arcani';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordRangerSArcaniKeywordPage />;
}
