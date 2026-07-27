import OfficialEmpirebrKeywordPage, { generateMetadata } from './official-empirebr';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialEmpirebrKeywordPage />;
}
