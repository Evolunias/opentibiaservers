import WithDiscordShadowcoresGuideKeywordPage, { generateMetadata } from './with-discord-shadowcores-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordShadowcoresGuideKeywordPage />;
}
