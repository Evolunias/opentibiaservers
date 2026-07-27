import BaiakServersMexicoKeywordPage, { generateMetadata } from './baiak-servers-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakServersMexicoKeywordPage />;
}
