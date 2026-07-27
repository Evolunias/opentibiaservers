import BaiakStatusMexicoKeywordPage, { generateMetadata } from './baiak-status-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakStatusMexicoKeywordPage />;
}
