import Cyntara11BaiakServerKeywordPage, { generateMetadata } from './cyntara-11-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Cyntara11BaiakServerKeywordPage />;
}
