import BaiakServersBrazilKeywordPage, { generateMetadata } from './baiak-servers-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakServersBrazilKeywordPage />;
}
