import CoxaotChileServersKeywordPage, { generateMetadata } from './coxaot-chile-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CoxaotChileServersKeywordPage />;
}
