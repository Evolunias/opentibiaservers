import CoxaotHighExpKeywordPage, { generateMetadata } from './coxaot-high-exp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CoxaotHighExpKeywordPage />;
}
