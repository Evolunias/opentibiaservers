import TopOxygenotRegisterKeywordPage, { generateMetadata } from './top-oxygenot-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopOxygenotRegisterKeywordPage />;
}
