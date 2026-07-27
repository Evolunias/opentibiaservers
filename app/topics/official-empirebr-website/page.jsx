import OfficialEmpirebrWebsiteKeywordPage, { generateMetadata } from './official-empirebr-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialEmpirebrWebsiteKeywordPage />;
}
