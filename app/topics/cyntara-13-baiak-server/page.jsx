import Cyntara13BaiakServerKeywordPage, { generateMetadata } from './cyntara-13-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Cyntara13BaiakServerKeywordPage />;
}
