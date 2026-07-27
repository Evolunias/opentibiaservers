import BaiakServersLatinAmericaKeywordPage, { generateMetadata } from './baiak-servers-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakServersLatinAmericaKeywordPage />;
}
