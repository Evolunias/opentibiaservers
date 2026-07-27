import CoxaotMexicoServersKeywordPage, { generateMetadata } from './coxaot-mexico-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CoxaotMexicoServersKeywordPage />;
}
