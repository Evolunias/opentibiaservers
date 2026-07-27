import CurrentRubinotRegisterKeywordPage, { generateMetadata } from './current-rubinot-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentRubinotRegisterKeywordPage />;
}
