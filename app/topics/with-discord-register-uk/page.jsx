import WithDiscordRegisterUkKeywordPage, { generateMetadata } from './with-discord-register-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordRegisterUkKeywordPage />;
}
