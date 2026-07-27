import CoxaotGuideKeywordPage, { generateMetadata } from './coxaot-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CoxaotGuideKeywordPage />;
}
