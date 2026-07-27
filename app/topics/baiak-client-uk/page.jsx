import BaiakClientUkKeywordPage, { generateMetadata } from './baiak-client-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakClientUkKeywordPage />;
}
