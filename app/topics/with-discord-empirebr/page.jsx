import WithDiscordEmpirebrKeywordPage, { generateMetadata } from './with-discord-empirebr';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordEmpirebrKeywordPage />;
}
