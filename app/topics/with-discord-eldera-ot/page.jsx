import WithDiscordElderaOtKeywordPage, { generateMetadata } from './with-discord-eldera-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordElderaOtKeywordPage />;
}
