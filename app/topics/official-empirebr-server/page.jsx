import OfficialEmpirebrServerKeywordPage, { generateMetadata } from './official-empirebr-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialEmpirebrServerKeywordPage />;
}
