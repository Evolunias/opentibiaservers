import SeasonalEmpirebrServerKeywordPage, { generateMetadata } from './seasonal-empirebr-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalEmpirebrServerKeywordPage />;
}
