import OfficialEmpirebrOtsKeywordPage, { generateMetadata } from './official-empirebr-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialEmpirebrOtsKeywordPage />;
}
