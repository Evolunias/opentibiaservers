import BestRubinotRegisterKeywordPage, { generateMetadata } from './best-rubinot-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestRubinotRegisterKeywordPage />;
}
