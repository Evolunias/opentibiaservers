import BaiakOpenTibiaServerNorthAmericaKeywordPage, { generateMetadata } from './baiak-open-tibia-server-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakOpenTibiaServerNorthAmericaKeywordPage />;
}
