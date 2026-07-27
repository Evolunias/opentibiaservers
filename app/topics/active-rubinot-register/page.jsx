import ActiveRubinotRegisterKeywordPage, { generateMetadata } from './active-rubinot-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveRubinotRegisterKeywordPage />;
}
