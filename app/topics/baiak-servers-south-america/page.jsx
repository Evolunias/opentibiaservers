import BaiakServersSouthAmericaKeywordPage, { generateMetadata } from './baiak-servers-south-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakServersSouthAmericaKeywordPage />;
}
