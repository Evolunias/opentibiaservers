import BaiakClientCanadaKeywordPage, { generateMetadata } from './baiak-client-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakClientCanadaKeywordPage />;
}
