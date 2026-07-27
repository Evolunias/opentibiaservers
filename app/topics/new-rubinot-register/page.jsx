import NewRubinotRegisterKeywordPage, { generateMetadata } from './new-rubinot-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewRubinotRegisterKeywordPage />;
}
