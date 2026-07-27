import CurrentEmpirebrOfficialKeywordPage, { generateMetadata } from './current-empirebr-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentEmpirebrOfficialKeywordPage />;
}
