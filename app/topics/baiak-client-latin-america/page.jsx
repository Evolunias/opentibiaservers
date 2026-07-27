import BaiakClientLatinAmericaKeywordPage, { generateMetadata } from './baiak-client-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakClientLatinAmericaKeywordPage />;
}
