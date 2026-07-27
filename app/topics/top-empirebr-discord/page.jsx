import TopEmpirebrDiscordKeywordPage, { generateMetadata } from './top-empirebr-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopEmpirebrDiscordKeywordPage />;
}
