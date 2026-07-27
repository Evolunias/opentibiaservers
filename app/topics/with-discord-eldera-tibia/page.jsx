import WithDiscordElderaTibiaKeywordPage, { generateMetadata } from './with-discord-eldera-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordElderaTibiaKeywordPage />;
}
