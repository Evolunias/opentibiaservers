import WithDiscordEvoleraOpenTibiaKeywordPage, { generateMetadata } from './with-discord-evolera-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordEvoleraOpenTibiaKeywordPage />;
}
