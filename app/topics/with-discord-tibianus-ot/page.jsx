import WithDiscordTibianusOtKeywordPage, { generateMetadata } from './with-discord-tibianus-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordTibianusOtKeywordPage />;
}
