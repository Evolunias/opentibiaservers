import WithDiscordShadowcoresRegisterKeywordPage, { generateMetadata } from './with-discord-shadowcores-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordShadowcoresRegisterKeywordPage />;
}
