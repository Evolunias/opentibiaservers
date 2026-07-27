import NewEmpirebrDiscordKeywordPage, { generateMetadata } from './new-empirebr-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewEmpirebrDiscordKeywordPage />;
}
