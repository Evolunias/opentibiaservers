import CoxaotUkServerKeywordPage, { generateMetadata } from './coxaot-uk-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CoxaotUkServerKeywordPage />;
}
