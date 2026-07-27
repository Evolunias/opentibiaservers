import HighrateEmpirebrTibiaKeywordPage, { generateMetadata } from './highrate-empirebr-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateEmpirebrTibiaKeywordPage />;
}
