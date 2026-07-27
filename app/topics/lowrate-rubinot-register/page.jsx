import LowrateRubinotRegisterKeywordPage, { generateMetadata } from './lowrate-rubinot-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateRubinotRegisterKeywordPage />;
}
