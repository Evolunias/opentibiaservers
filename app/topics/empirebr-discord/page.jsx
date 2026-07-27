import EmpirebrDiscordKeywordPage, { generateMetadata } from './empirebr-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EmpirebrDiscordKeywordPage />;
}
