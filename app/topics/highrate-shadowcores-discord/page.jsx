import HighrateShadowcoresDiscordKeywordPage, { generateMetadata } from './highrate-shadowcores-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateShadowcoresDiscordKeywordPage />;
}
