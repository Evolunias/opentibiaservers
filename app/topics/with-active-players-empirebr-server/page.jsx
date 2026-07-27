import WithActivePlayersEmpirebrServerKeywordPage, { generateMetadata } from './with-active-players-empirebr-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersEmpirebrServerKeywordPage />;
}
