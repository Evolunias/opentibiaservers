import OfficialEmpirebrOfficialKeywordPage, { generateMetadata } from './official-empirebr-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialEmpirebrOfficialKeywordPage />;
}
