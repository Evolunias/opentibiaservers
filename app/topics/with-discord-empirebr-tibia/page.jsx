import WithDiscordEmpirebrTibiaKeywordPage, { generateMetadata } from './with-discord-empirebr-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordEmpirebrTibiaKeywordPage />;
}
