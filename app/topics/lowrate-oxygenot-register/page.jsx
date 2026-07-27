import LowrateOxygenotRegisterKeywordPage, { generateMetadata } from './lowrate-oxygenot-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateOxygenotRegisterKeywordPage />;
}
