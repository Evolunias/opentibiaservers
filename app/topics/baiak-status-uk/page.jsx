import BaiakStatusUkKeywordPage, { generateMetadata } from './baiak-status-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakStatusUkKeywordPage />;
}
