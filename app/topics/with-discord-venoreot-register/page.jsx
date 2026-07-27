import WithDiscordVenoreotRegisterKeywordPage, { generateMetadata } from './with-discord-venoreot-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordVenoreotRegisterKeywordPage />;
}
