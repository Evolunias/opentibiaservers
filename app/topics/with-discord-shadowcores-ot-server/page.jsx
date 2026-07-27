import WithDiscordShadowcoresOtServerKeywordPage, { generateMetadata } from './with-discord-shadowcores-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordShadowcoresOtServerKeywordPage />;
}
