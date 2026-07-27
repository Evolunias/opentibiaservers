import BaiakClientUsaKeywordPage, { generateMetadata } from './baiak-client-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakClientUsaKeywordPage />;
}
