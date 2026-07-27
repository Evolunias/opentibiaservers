import LowrateEmpirebrWebsiteKeywordPage, { generateMetadata } from './lowrate-empirebr-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateEmpirebrWebsiteKeywordPage />;
}
