import Originaltibia11BaiakServerKeywordPage, { generateMetadata } from './originaltibia-11-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Originaltibia11BaiakServerKeywordPage />;
}
