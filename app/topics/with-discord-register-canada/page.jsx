import WithDiscordRegisterCanadaKeywordPage, { generateMetadata } from './with-discord-register-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordRegisterCanadaKeywordPage />;
}
