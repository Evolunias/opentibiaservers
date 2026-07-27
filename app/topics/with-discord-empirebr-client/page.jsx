import WithDiscordEmpirebrClientKeywordPage, { generateMetadata } from './with-discord-empirebr-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordEmpirebrClientKeywordPage />;
}
