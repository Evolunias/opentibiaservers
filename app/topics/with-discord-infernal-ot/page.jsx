import WithDiscordInfernalOtKeywordPage, { generateMetadata } from './with-discord-infernal-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordInfernalOtKeywordPage />;
}
