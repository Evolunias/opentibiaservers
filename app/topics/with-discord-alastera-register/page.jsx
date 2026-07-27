import WithDiscordAlasteraRegisterKeywordPage, { generateMetadata } from './with-discord-alastera-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordAlasteraRegisterKeywordPage />;
}
