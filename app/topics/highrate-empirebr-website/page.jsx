import HighrateEmpirebrWebsiteKeywordPage, { generateMetadata } from './highrate-empirebr-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateEmpirebrWebsiteKeywordPage />;
}
