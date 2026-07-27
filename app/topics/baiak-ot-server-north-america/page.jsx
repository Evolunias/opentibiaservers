import BaiakOtServerNorthAmericaKeywordPage, { generateMetadata } from './baiak-ot-server-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakOtServerNorthAmericaKeywordPage />;
}
