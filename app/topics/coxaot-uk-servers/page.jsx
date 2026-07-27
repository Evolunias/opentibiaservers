import CoxaotUkServersKeywordPage, { generateMetadata } from './coxaot-uk-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CoxaotUkServersKeywordPage />;
}
