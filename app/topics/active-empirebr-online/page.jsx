import ActiveEmpirebrOnlineKeywordPage, { generateMetadata } from './active-empirebr-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveEmpirebrOnlineKeywordPage />;
}
