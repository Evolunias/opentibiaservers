import LowrateShadowcoresDiscordKeywordPage, { generateMetadata } from './lowrate-shadowcores-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateShadowcoresDiscordKeywordPage />;
}
