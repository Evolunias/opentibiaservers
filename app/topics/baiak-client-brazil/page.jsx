import BaiakClientBrazilKeywordPage, { generateMetadata } from './baiak-client-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakClientBrazilKeywordPage />;
}
