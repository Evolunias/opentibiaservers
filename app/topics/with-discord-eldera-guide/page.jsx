import WithDiscordElderaGuideKeywordPage, { generateMetadata } from './with-discord-eldera-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordElderaGuideKeywordPage />;
}
