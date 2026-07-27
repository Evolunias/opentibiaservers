import BaiakStatusNorthAmericaKeywordPage, { generateMetadata } from './baiak-status-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakStatusNorthAmericaKeywordPage />;
}
