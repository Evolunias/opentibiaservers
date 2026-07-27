import CoxaotKeywordPage, { generateMetadata } from './coxaot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CoxaotKeywordPage />;
}
