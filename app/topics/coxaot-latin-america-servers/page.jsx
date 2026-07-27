import CoxaotLatinAmericaServersKeywordPage, { generateMetadata } from './coxaot-latin-america-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CoxaotLatinAmericaServersKeywordPage />;
}
