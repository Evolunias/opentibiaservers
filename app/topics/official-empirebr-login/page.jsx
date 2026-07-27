import OfficialEmpirebrLoginKeywordPage, { generateMetadata } from './official-empirebr-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialEmpirebrLoginKeywordPage />;
}
