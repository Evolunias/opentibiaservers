import WithDiscordShadowcoresOtKeywordPage, { generateMetadata } from './with-discord-shadowcores-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordShadowcoresOtKeywordPage />;
}
