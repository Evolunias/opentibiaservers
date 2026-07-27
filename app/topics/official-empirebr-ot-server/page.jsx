import OfficialEmpirebrOtServerKeywordPage, { generateMetadata } from './official-empirebr-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialEmpirebrOtServerKeywordPage />;
}
