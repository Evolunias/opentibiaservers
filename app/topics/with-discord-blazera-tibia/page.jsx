import WithDiscordBlazeraTibiaKeywordPage, { generateMetadata } from './with-discord-blazera-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordBlazeraTibiaKeywordPage />;
}
