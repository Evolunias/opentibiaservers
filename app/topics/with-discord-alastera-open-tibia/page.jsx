import WithDiscordAlasteraOpenTibiaKeywordPage, { generateMetadata } from './with-discord-alastera-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordAlasteraOpenTibiaKeywordPage />;
}
