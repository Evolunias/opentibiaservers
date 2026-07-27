import WithDiscordUnlineOtKeywordPage, { generateMetadata } from './with-discord-unline-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordUnlineOtKeywordPage />;
}
