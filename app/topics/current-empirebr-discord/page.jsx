import CurrentEmpirebrDiscordKeywordPage, { generateMetadata } from './current-empirebr-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentEmpirebrDiscordKeywordPage />;
}
