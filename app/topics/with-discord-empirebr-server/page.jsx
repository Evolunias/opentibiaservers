import WithDiscordEmpirebrServerKeywordPage, { generateMetadata } from './with-discord-empirebr-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordEmpirebrServerKeywordPage />;
}
