import WithDiscordRegisterUsaKeywordPage, { generateMetadata } from './with-discord-register-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordRegisterUsaKeywordPage />;
}
