import BaiakServersNorthAmericaKeywordPage, { generateMetadata } from './baiak-servers-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakServersNorthAmericaKeywordPage />;
}
