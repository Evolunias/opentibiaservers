import PopularEmpirebrOnlineKeywordPage, { generateMetadata } from './popular-empirebr-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularEmpirebrOnlineKeywordPage />;
}
