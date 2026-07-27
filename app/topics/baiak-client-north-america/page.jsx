import BaiakClientNorthAmericaKeywordPage, { generateMetadata } from './baiak-client-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakClientNorthAmericaKeywordPage />;
}
