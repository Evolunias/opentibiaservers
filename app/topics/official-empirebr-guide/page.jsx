import OfficialEmpirebrGuideKeywordPage, { generateMetadata } from './official-empirebr-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialEmpirebrGuideKeywordPage />;
}
