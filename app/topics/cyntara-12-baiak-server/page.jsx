import Cyntara12BaiakServerKeywordPage, { generateMetadata } from './cyntara-12-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Cyntara12BaiakServerKeywordPage />;
}
