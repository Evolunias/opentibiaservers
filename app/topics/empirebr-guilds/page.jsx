import EmpirebrGuildsKeywordPage, { generateMetadata } from './empirebr-guilds';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EmpirebrGuildsKeywordPage />;
}
