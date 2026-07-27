import BaiakOpenTibiaServerUsaKeywordPage, { generateMetadata } from './baiak-open-tibia-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakOpenTibiaServerUsaKeywordPage />;
}
