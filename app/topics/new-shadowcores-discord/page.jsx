import NewShadowcoresDiscordKeywordPage, { generateMetadata } from './new-shadowcores-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewShadowcoresDiscordKeywordPage />;
}
