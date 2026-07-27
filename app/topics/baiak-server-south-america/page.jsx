import BaiakServerSouthAmericaKeywordPage, { generateMetadata } from './baiak-server-south-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakServerSouthAmericaKeywordPage />;
}
