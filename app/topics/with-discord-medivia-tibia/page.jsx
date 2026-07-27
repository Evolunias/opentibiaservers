import WithDiscordMediviaTibiaKeywordPage, { generateMetadata } from './with-discord-medivia-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordMediviaTibiaKeywordPage />;
}
