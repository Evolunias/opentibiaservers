import HighrateRubinotRegisterKeywordPage, { generateMetadata } from './highrate-rubinot-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateRubinotRegisterKeywordPage />;
}
