import WithDiscordYurotsOtKeywordPage, { generateMetadata } from './with-discord-yurots-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordYurotsOtKeywordPage />;
}
