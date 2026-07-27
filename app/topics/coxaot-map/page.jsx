import CoxaotMapKeywordPage, { generateMetadata } from './coxaot-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CoxaotMapKeywordPage />;
}
