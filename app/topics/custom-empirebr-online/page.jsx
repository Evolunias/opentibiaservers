import CustomEmpirebrOnlineKeywordPage, { generateMetadata } from './custom-empirebr-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomEmpirebrOnlineKeywordPage />;
}
