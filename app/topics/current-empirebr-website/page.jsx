import CurrentEmpirebrWebsiteKeywordPage, { generateMetadata } from './current-empirebr-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentEmpirebrWebsiteKeywordPage />;
}
