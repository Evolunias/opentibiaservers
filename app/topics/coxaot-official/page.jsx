import CoxaotOfficialKeywordPage, { generateMetadata } from './coxaot-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CoxaotOfficialKeywordPage />;
}
