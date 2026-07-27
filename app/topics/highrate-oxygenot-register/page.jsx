import HighrateOxygenotRegisterKeywordPage, { generateMetadata } from './highrate-oxygenot-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateOxygenotRegisterKeywordPage />;
}
