import CoxaotRegisterKeywordPage, { generateMetadata } from './coxaot-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CoxaotRegisterKeywordPage />;
}
