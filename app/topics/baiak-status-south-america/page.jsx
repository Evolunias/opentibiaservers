import BaiakStatusSouthAmericaKeywordPage, { generateMetadata } from './baiak-status-south-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakStatusSouthAmericaKeywordPage />;
}
