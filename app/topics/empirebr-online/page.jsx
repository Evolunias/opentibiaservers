import EmpirebrOnlineKeywordPage, { generateMetadata } from './empirebr-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EmpirebrOnlineKeywordPage />;
}
