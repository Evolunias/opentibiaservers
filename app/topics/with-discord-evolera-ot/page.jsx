import WithDiscordEvoleraOtKeywordPage, { generateMetadata } from './with-discord-evolera-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordEvoleraOtKeywordPage />;
}
