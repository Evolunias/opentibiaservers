import TopShadowcoresDiscordKeywordPage, { generateMetadata } from './top-shadowcores-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopShadowcoresDiscordKeywordPage />;
}
