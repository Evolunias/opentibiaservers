import CurrentEmpirebrKeywordPage, { generateMetadata } from './current-empirebr';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentEmpirebrKeywordPage />;
}
