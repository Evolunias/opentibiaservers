import WithDiscordNtoStarRegisterKeywordPage, { generateMetadata } from './with-discord-nto-star-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordNtoStarRegisterKeywordPage />;
}
