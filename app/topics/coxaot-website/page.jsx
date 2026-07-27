import CoxaotWebsiteKeywordPage, { generateMetadata } from './coxaot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CoxaotWebsiteKeywordPage />;
}
