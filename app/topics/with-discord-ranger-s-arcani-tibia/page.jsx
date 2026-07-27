import WithDiscordRangerSArcaniTibiaKeywordPage, { generateMetadata } from './with-discord-ranger-s-arcani-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordRangerSArcaniTibiaKeywordPage />;
}
