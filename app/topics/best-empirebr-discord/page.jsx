import BestEmpirebrDiscordKeywordPage, { generateMetadata } from './best-empirebr-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestEmpirebrDiscordKeywordPage />;
}
