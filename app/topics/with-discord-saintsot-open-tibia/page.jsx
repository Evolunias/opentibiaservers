import WithDiscordSaintsotOpenTibiaKeywordPage, { generateMetadata } from './with-discord-saintsot-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordSaintsotOpenTibiaKeywordPage />;
}
