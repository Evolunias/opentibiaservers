import BaiakGuideSouthAmericaKeywordPage, { generateMetadata } from './baiak-guide-south-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakGuideSouthAmericaKeywordPage />;
}
