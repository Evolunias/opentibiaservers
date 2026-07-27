import ActiveEmpirebrWebsiteKeywordPage, { generateMetadata } from './active-empirebr-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveEmpirebrWebsiteKeywordPage />;
}
