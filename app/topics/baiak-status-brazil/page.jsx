import BaiakStatusBrazilKeywordPage, { generateMetadata } from './baiak-status-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakStatusBrazilKeywordPage />;
}
