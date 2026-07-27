import CoxaotAlternativesKeywordPage, { generateMetadata } from './coxaot-alternatives';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CoxaotAlternativesKeywordPage />;
}
