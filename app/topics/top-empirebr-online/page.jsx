import TopEmpirebrOnlineKeywordPage, { generateMetadata } from './top-empirebr-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopEmpirebrOnlineKeywordPage />;
}
