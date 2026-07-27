import BaiakStatusUsaKeywordPage, { generateMetadata } from './baiak-status-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakStatusUsaKeywordPage />;
}
