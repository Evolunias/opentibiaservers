import BaiakOriginaltibiaServerKeywordPage, { generateMetadata } from './baiak-originaltibia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakOriginaltibiaServerKeywordPage />;
}
